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
    $(document).on("click", "#deleteBtn", (event) => {
      fetch("api/ADRMetadata/delete/" + $(event.target).data("adrid"), {
        method: "DELETE",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resonse) => {
          page.redirect("/adrget");
        })
        .catch((err) => console.error(err));
    });

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
        `<li class="list-group-item list-group-item-action"><a class="" href="/displayById/${adr._id}">${adr.username}</a><button type="button" id="deleteBtn" data-adrid="${adr._id}" class="pull-right tn btn-danger">Delete</button></li>`;
    });
    console.log("ul", ul);
    $("#apisidebar").append(`<div class="list-group">${ul}</div>`);
    // page.redirect("/home");
  } catch (error) {
    console.log("login submit", error);
  }
};

export default adrListHandler;
