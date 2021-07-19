const supertest = require('supertest');
const {app, server} = require('../index');
const api = supertest(app);
const { initialFriends, getAllfriends } = require('./helpers');

beforeEach(async () => {
    console.log('I go first');
})

test('friends are returned in json', async () => {
    await api
        .get('/api/friends')
        .expect(200)
        .expect('Content-Type', /application\/json/)
});

test.skip('post adds a new friend', async () => {
    const newFriend = {
        "id": 3,
        "name": "Tali'Zorah nar Rayya "
    }
    await api
        .get('/api/friends')
        .send(newFriend)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const friendsName = await getAllfriends();
    expect(response.body).toHaveLength(4);
    expect(names).toContain(newFriend.name)
});

test('there are three friends', async () => {
    const response = await api.get('/api/friends');
    expect(response.body).toHaveLength(3);
});

test('check length of initialFriends ', async () => {
    const response = initialFriends;
    expect(response).toHaveLength(initialFriends.length);
});

test('check Commander Sheppard quote', async () => {
    const response = await (await api.get('/api/friends'));
    response.body.push(initialFriends[0])
    expect(response.body[3].quote).toBe("I'm Commander Shepard and this is my favorite store on the Citadel.")
});

test('check Tali is the last one on the initialFriends', async () => {
    expect(initialFriends[initialFriends.length -1].name).toContain("Tali")
});

afterAll(() => {
    server.close();
})