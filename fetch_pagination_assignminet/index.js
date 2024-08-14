let api = `https://jsonplaceholder.typicode.com/todos`;

console.log(api);

let container = document.getElementById("container");

const displayData = (data) => {
    container.innerHTML = "";
    
    data.forEach(({id, userId, title, completed}) => {
        let box = document.createElement("div");
        box.className = "box";
        let id1 = document.createElement("p");
        id1.innerText = `ID: ${id}`;
        let userId1 = document.createElement("h3");
        userId1.innerText = `User ID: ${userId}`;
        let title1 = document.createElement("p");
        title1.innerText = `Title: ${title}`;
        let completed1 = document.createElement("p");
        completed1.innerText = `Completed: ${completed}`;
        box.append(id1, userId1, title1, completed1);
        container.append(box);
    });
};

const getData = async (url) => {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log("data", data);
        displayData(data);
    } catch (error) {
        console.log(error);
    }
};

const initializePagination = async () => {
    try {
        // Fetch all data to get the total count
        let res = await fetch(api);
        let data = await res.json();
        let totalCount = data.length;
        
        // Set limit per page
        const limit = 20;

        // Call pagination function with total count and limit
        pagination(totalCount, limit);

        // Initial call to get data with default pagination
        getData(`${api}?_page=1&_limit=${limit}`);
    } catch (error) {
        console.log(error);
    }
};

const pagination = (totalCount, limit1) => {
    let total = totalCount;
    let limit = limit1;
    let noOfButtons = Math.ceil(total / limit);

    console.log(noOfButtons);

    let paginationBox = document.getElementById("pagination");
    paginationBox.innerHTML = "";

    for (let i = 1; i <= noOfButtons; i++) {
        let btn = document.createElement("button");
        btn.textContent = i;
        btn.addEventListener("click", () => {
            getData(`${api}?_page=${i}&_limit=${limit}`);
        });

        paginationBox.append(btn);
    }
};

// Initialize pagination and fetch the initial data
initializePagination();
