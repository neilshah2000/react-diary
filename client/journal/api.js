const create = (journal) => {
    delete journal._id;
    return fetch('/api/journal', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(journal)
    }).then((response) => {
        return response.json();
    }).catch((err) => {
        console.log(err)
    })
}

const listAll = () => {
    return fetch('/api/journal', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        return response.json();
    }).catch((err) => {
        console.log(err)
    })
}

const getJournal = (journalId) => {
    return fetch('/api/journal/' + journalId, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        return response.json();
    }).catch((err) => {
        console.log(err)
    })
}

const updateJournal = ( journal ) => {
    return fetch('/api/journal/' + journal._id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(journal)
    }).then(( response ) => {
        return response.json();
    }).catch(( err ) => {
        console.log(err);
    });
};

const getPrompts = () => {
    return fetch('/api/prompt', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        return response.json();
    }).catch((err) => {
        console.log(err)
    })
}


export {
    create,
    getJournal,
    listAll,
    updateJournal,
    getPrompts,
}