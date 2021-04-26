// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve({user: "kim"})
//         reject(new Error("No user found"))
//     }, 2000);
// })



// promise.then(user => {
//     console.log(user)
// }).catch(err => {console.log(err)})


console.log("Start")

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                userEmail: email
            });
        }, 5000);
    });

}



function getUserVideos(email) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(["video1", "video2", "video3", "video4", "video5"]);
        }, 2000);
    })
}

function getVideosDetails(video) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Title of the video");
        }, 3000);
    })
}


// const user = loginUser('kim@gmail.com', 12345678, user => {
//     console.log(user)
//     getUserVideos(user.userEmail, videos => {
//         console.log(videos)
//         getVideosDetails(videos[0], title => {
//             console.log(title)
//         })
//     })
// });
// console.log(user);

loginUser('kim@gmail.com', "password")
    .then(user => getUserVideos(user.email))
    .then(videos => getVideosDetails(videos[0]))
    .then(details => console.log(details))

console.log("Finnish")


// promise.all(promises)

const yt = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("getting staff from youtube")
        resolve({
            videos: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        })
    }, 2000)
})

const fb = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("getting staff from facebook")
        resolve({
            videos: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6']
        })
    }, 2000)
})

Promise.all([yt, fb]).then(results => {
    console.log(results)
})


//async await
async function displayUser() {
    try {
        const user = await loginUser('kim@gmail.com', 12345678);
        const vidoes = await getUserVideos(user.userEmail);
        const details = await getVideosDetails(vidoes[1]);

        console.log(details)
    } catch (error) {
        console.log("No videos found")
    }

}

displayUser();