// not working
import page from "//unpkg.com/page/page.mjs";
const profileLoadingPage = async () => {
  try {
    const response = await fetch("/api/profile", {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const profileResponse = await response.json();
    console.log(profileResponse);

    profileResponse.forEach((profile) => {
      console.log(profile);
      const optionTag = $(
        `<option value="${profile._id}">${profile.profilename}</option>`
      );
      console.log("testing on profile name is returned ");
      $("#profile").append(optionTag);
    });
    console.log(profileResponse);
    // page.redirect("/home");
    return Promise.resolve(profileResponse);
  } catch (error) {
    console.log("profile loading failed", error);
  }
};

export default profileLoadingPage;
