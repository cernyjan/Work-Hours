
$(function(){
    var button = $('<button>', {text: 'Prichod', width: '150px', height: '50px', id: "button"});
    var button2 = $('<button>', {text: 'Odchod', width: '150px', height: '50px', id: "button2"});
    var br = document.createElement("br");    
        
    button.appendTo('body');
    $("#button").after("<br />");
    button2.appendTo('body');
    
    button.click( function(){
            chrome.tabs.executeScript(null, {file: "prichod.js"});
            window.close();
    });
    button2.click( function(){
            chrome.tabs.executeScript(null, {file: "odchod.js"});
            window.close();
    });
});