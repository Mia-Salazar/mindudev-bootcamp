const initialFriends =  [
    {
        "id": 0,
        "name": "Commander Sheppard",
        "quote": "I'm Commander Shepard and this is my favorite store on the Citadel."
    },
    {
        "id": 1,
        "name": "Kaidan Alenko",
        "quote": "Big place"
    },
    {
        "id": 2,
        "name": "Garrus Vakarian",
        "quote": "I'm In The Middle of Some Calibrations"
    },
    {
        "id": 3,
        "name": "Tali'Zorah nar Rayya ",
        "quote": "Young males of all species have strange ideas of what the asari are like"
    }
];

const getAllfriends = async() => {
    const response = await api.get('/api/friends');
    return response.body.map(friend => friend.name);
}

module.exports = {
    initialFriends,
    getAllfriends
}