let profileModel = {
    fetchData: async function() {
        return await fetch('./../../JSON/Data.JSON')
                .then((response) => response.json());
    }
}

export {profileModel};