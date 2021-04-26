// normal function
// function otherFunct() {
//     console.log("we are in another function");
//     console.log("do some other staff");
// }

// console.log("start");
// //otherFunct();
// //setTimeout snippet
// setTimeout(() => {
//     console.log("we are in time out")
// }, 5000)
// console.log("end");


console.log("Start")

function loginUser(email, password, callback) {
    setTimeout(() => {
        callback({
            userEmail: email
        });
    }, 5000);
}



function getUserVideos(email, callback) {
    setTimeout(() => {
        callback(["video1", "video2", "video3", "video4", "video5"]);
    }, 2000);
}

function getVideosDetails(video, callback) {
    setTimeout(() => {
        callback("Title of the video");
    }, 2000);
}
const user = loginUser('kim@gmail.com', 12345678, user => {
    console.log(user)
    getUserVideos(user.userEmail, videos => {
        console.log(videos)
        getVideosDetails(videos[0], title => {
            console.log(title)
        })
    })
});
// console.log(user);

console.log("Finnish")