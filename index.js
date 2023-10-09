// Please read the README.md to understand what to do. Happy Coding !
const fetchUserData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usersData = await response.json();
        const modifiedUserData = usersData.map((user) => {
            return {
                Name: user.name,
                Username: user.username,
                Email: user.email,
                Address: user.address.street,
                Phone: user.phone,
                Website: user.website,
                Company: user.company.name,
            };
        });

        const filteredUserData = modifiedUserData.filter((user) => user.Email.endsWith('.biz'));
        const sortedUserData = filteredUserData.sort((a, b) => a.Name.localeCompare(b.Name));

        console.log(filteredUserData);
        console.log(sortedUserData);
        console.log(modifiedUserData);
    } catch (error) {
        console.error('Error fetching:', error);
    }
};

fetchUserData();