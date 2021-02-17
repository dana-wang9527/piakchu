const string = `
.skin * {
    box-sizing: border-box;
  }
  .skin* ::after,
  .skin* ::before {
    box-sizing: border-box;
  }
  .skin * {
    margin: 0;
    padding: 0;
  }
  .skin {
    position: relative;
    background: rgb(254, 228, 51);
    min-height: 50vh;
  }
  .nose {
    border: 1px solid red;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    top: 145px;
    margin-left: -12px;
    z-index: 10;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: center bottom;
    animation: wave 500ms infinite linear;
  }
  .eye {
    border: 1px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: rgb(46, 46, 46);
  }
  .eye::before {
    content: "";
    display: block;
    border: 3px solid black;
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 50%;
    margin-left: 8px;
    margin-top: 1px;
  }
  
  .eye.left {
    transform: translateX(-100px);
    border-radius: 50%;
  }
  .eye.right {
    transform: translateX(100px);
    border-radius: 50%;
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 180px;
    left: 50%;
    margin-left: -100px;
  }
  
  .mouth .up {
    position: relative;
    bottom: 10px;
    z-index: 1;
  }
  .mouth .up .lip {
    border: 2px solid black;
    width: 100px;
    height: 30px;
    background: rgb(253, 227, 72);
    border-top: transparent;
  
    position: relative;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-52px);
    position: absolute;
    left: 50%;
    margin-left: -50px;
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(52px);
    position: absolute;
    right: 50%;
    margin-right: -50px;
  }
  .mouth .up .lip::before {
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0px;
    background: rgb(254, 228, 51);
  }
  
  .mouth .up .lip.left::before {
    right: -6px;
  }
  .mouth .up .lip.right::before {
    left: -6px;
  }
  .mouth .down {
    height: 180px;
    position: absolute;
    top: 10px;
    width: 100%;
    overflow: hidden;
  }
  .mouth .down .yuan1 {
    border: 2px solid black;
    background: rgb(153, 5, 19);
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -75px;
    margin-bottom: 70px;
    border-radius: 75px/300px;
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2 {
    width: 150px;
    height: 300px;
    position: absolute;
    bottom: -230px;
    left: 50%;
    margin-left: -75px;
    border-radius: 100px;
    background: rgb(252, 74, 98);
  }
  .face {
    border: 1px solid red;
    width: 88px;
    height: 88px;
    position: absolute;
    left: 50%;
    top: 200px;
    z-index: 3;
    margin-left: -44px;
  }
  .face > img {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  
  .face.left {
    transform: translateX(-180px);
    border-radius: 50%;
    background: rgb(252, 13, 28);
    border: 3px solid black;
  }
  .face.left > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
  }
  .face.right {
    transform: translateX(180px);
    border-radius: 50%;
    background: rgb(252, 13, 28);
    border: 3px solid black;
  }
  .face.left > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
  }
  `;
export default string;
