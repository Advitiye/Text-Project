noseX = 0
noseY = 0
difference = 0
right_wrist = 0
left_wrist = 0

function setup() {
    video = createCapture(VIDEO)
    video.size(400,400)

    canvas = createCanvas(400,400)
    canvas.position(800,200)

    posenet = ml5.poseNet(video)
    posenet.on("pose",gotPoses)
}
function gotPoses(results) {
    if(results.length>0) {
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y

    right_wrist = results[0].pose.leftWrist.x
    left_wrist = results[0].pose.rightWrist.x
    
    difference = floor(right_wrist - left_wrist)
    }
}
function draw() {
    background("#82a19a")
    fill("#cf933a")
    stroke("#cf933a")

    text("Advitiye",noseX,noseY)
    textSize(difference)
    
    document.getElementById("hewid").innerHTML = difference
}