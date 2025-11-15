const BASE = "https://app-9xd9z654j-asaphongs-projects.vercel.app";

async function getUsers() {
    const res = await fetch(`${BASE}/api/users`);
    const data = await res.json();
    document.getElementById("getResult").textContent = JSON.stringify(data, null, 2);
}

async function createUser() {
    const payload = {
        name: document.getElementById("postName").value,
        email: document.getElementById("postEmail").value,
        role: document.getElementById("postRole").value
    };
    const customId = document.getElementById("postId").value;
    if (customId) payload.id = customId;

    const res = await fetch(`${BASE}/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    const data = await res.json();
    document.getElementById("postResult").textContent = JSON.stringify(data, null, 2);
}

async function updateUser() {
    const id = document.getElementById("putId").value;
    const payload = {};

    if (document.getElementById("putName").value) payload.name = document.getElementById("putName").value;
    if (document.getElementById("putEmail").value) payload.email = document.getElementById("putEmail").value;
    if (document.getElementById("putRole").value) payload.role = document.getElementById("putRole").value;

    const res = await fetch(`${BASE}/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    const data = await res.json();
    document.getElementById("putResult").textContent = JSON.stringify(data, null, 2);
}

async function deleteUser() {
    const id = document.getElementById("deleteId").value;

    const res = await fetch(`${BASE}/api/users/${id}`, {
        method: "DELETE"
    });

    const data = await res.json();
    document.getElementById("deleteResult").textContent = JSON.stringify(data, null, 2);
}
