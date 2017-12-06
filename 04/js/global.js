
window.onload = function(){

    // var name = document.getElementById("intro");  
    // name.innerHTML = "Zdravo Svetu";
    // console.log(name);


    // var link = document.getElementsByTagName("a");
    // console.dir(link);
    // link[0].innerHTML = "Google sucks";
    // link[0].href = "https://google.com";
    // link[0].setAttribute("target", "_BLANK");


    // var myImg = document.getElementsByClassName("image");
    // console.log(myImg[0].src);
    // myImg[0].src = "images/images2.jpg";

    // var paragraph = document.getElementsByTagName("p");
    // document.body.insertBefore(paragraph[2], paragraph[0]);

    // var list = document.querySelectorAll(".list")[0];
    // for(var i = 0; i < list.children.length; i++){
    //     for( var j = 0; j < list.children[i].children.length; j++){
    //         var single_link = list.children[i].children[j];
    //         console.log(single_link);
    //         for(var k = 0; k < single_link.children.length; k++){
    //             if(single_link.children[k].nodeName == "IMG"){
    //                 single_link.children[k].src = "images/cat.jpg";
    //             }
                
    //         }

    //     }

        // var styledLink = document.querySelectorAll(".green_link")[0];
        // styledLink.style.color = "green";
        // styledLink.style.background = "yellow";
        // styledLink.style.fontSize = "50px";

        // console.dir(styledLink);

        // 
        
        // var test = document.querySelectorAll(".test")[0].addEventListener("click", function(){
        //     this.classList.add("nekoja_klasa");
        // })

        // var myElement = document.createElement("button");
        // var text = document.createTextNode("Click me");
        // myElement.appendChild(text)
        // document.body.appendChild(myElement);

        function makeElement(tag,text){
            var element = document.createElement("h2");
            var textin = document.createTextNode(text);
            element.appendChild(textin);
            document.body.appendChild(element);
        }

        makeElement("h2", "Hello World")
        

    }
    

    

    
    






