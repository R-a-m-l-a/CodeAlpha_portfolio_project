const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var timeOut;
function ciclesqueeze(){
    var xscale=1;
    var yscale=1;
    var xprev=0;
    var yprev=0;
       window.addEventListener("mousemove",function (dets){
        xscale=gsap.utils.clamp(.8, 1.3,dets.clientX-xprev );
        yscale=gsap.utils.clamp(.8,1.3,dets.clientY-yprev);
        xprev=dets.clientX;
        yprev=dets.clientY;
      circleMouseFollower(xscale,yscale);
      timeOut=setTimeout(function(){
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
    }, 100);
      
       });
}
function FirstPageAnim() {
    var tl=gsap.timeline();
    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        duration:2,
        ease: Expo.easeInOut,
        stagger:.2,
        delay: -1
    })
    .from("#heroFooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}
function circleMouseFollower(xscale,yscale){
    clearTimeout(timeOut); 
           window.addEventListener("mousemove",function(dets){
          document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
          
           })
}
ciclesqueeze();
circleMouseFollower();
FirstPageAnim();


