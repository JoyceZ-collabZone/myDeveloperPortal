// not working
const profileLoadingPage = async(getProfiles) => {
    try {
        const response = await fetch("/api/profile", {
            method: "GET",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const getProfileResponse = await response.json();

        function printProfileListing(getProfileResponse) {
            getProfileResponse.forEach((profile) => {
                console.log(profile);
                const profileListingTag = $(
                    `<option value="${getProfileResponse._id}">${profile.profilename}</option>`
                );
                console.log("testing is profile name is returned ");
                $("#profile").append(profileListingTag);
            });
        }
        console.log(getProfileResponse);
        page.redirect("/home");
    } catch (error) {
        console.log("profile loading failed", error);
    }
};

export default profileLoadingPage;