import page from "//unpkg.com/page/page.mjs";
const adrListHandler = async (ctx, next) => {
  //get by id
  console.log("context object logging", ctx);
  console.log("context object logging", ctx.params._id);
  if (ctx.params.id) {
    //get by id
    page.redirect("/displayById/:id");
  }

  // let url = "/api/ADRMetadata";
  // if (ctx.params.id) {
  //   //get by id
  //   url = `/api/ADRMetadata/${ctx.params.id}`;
  //   console.log("get by id clicked");

  //   $("#apisidebar").empty();
  //   $("#apisidebar").append(adrMetadataResponse);

  // } else {
  //   //get all or redirect etc
  //   url;
  //   console.log("get by list clicked");
  // }

  try {
    const response = await fetch("/api/ADRMetadata", {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const adrMetadataResponse = await response.json();
    console.log(adrMetadataResponse);

    $("#apisidebar").empty();
    let ul = "";
    adrMetadataResponse.forEach((adr) => {
      ul =
        ul +
        `<a class="list-group-item list-group-item-action" href="/displayById/${adr._id}">${adr.username}</a>`;
    });
    console.log("ul", ul);
    $("#apisidebar").append(`<div class="list-group">${ul}</div>`);
    // page.redirect("/home");
  } catch (error) {
    console.log("login submit", error);
  }
};

export default adrListHandler;
