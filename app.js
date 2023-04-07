async function getResponse() {

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (response.ok) {
        let data = await response.json();

        for (let key in data) {
            // console.log(data[key]);

            tableRow = document.createElement('tr');
            ID = document.createElement('td');
            userID = document.createElement('td');
            title = document.createElement('td');
            body = document.createElement('td');

            ID.innerText = data[key].id;
            userID.innerText = data[key].userId;
            title.innerText = data[key].title;
            body.innerText = data[key].body;

            ID.setAttribute('style', 'text-align: center;');
            userID.setAttribute('style', 'text-align: center;');

            document.getElementById('tbody').append(tableRow);
            tableRow.append(ID);
            tableRow.append(userID);
            tableRow.append(title);
            tableRow.append(body);
        }

    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

getResponse();