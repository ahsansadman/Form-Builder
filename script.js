
let count = 1;
$(document).ready(function(){
    $("select.domain").change(function(){
        var selected = $(this).children("option:selected").val();
        if(selected == 'choice' || selected == 'check'){
            document.getElementById('multiple').style.visibility = 'visible';
            document.getElementById('radio').innerHTML = "";
            count = 1;
        }
        else if (selected == 'short'){  
            document.getElementById('multiple').style.visibility = 'hidden';
            document.getElementById('radio').innerHTML = "";
            count = 1;
        }
    });
});

function clear(){
    document.getElementById('radio').innerHTML = "";
    document.getElementById('question').value = "";
    count = 1;
}

function addOption(){
    if(document.getElementById('domain').value == 'choice'){   
    let linebreak = document.createElement("br");
    let div = document.getElementById('radio');
    let field = document.createElement('fieldset')
    field.id = 'group'

    let input = document.createElement('input');
    input.type = 'radio';
    input.name = 'group';
    div.appendChild(input);
    let title = document.createElement('input')
    title.placeholder = 'option' + count;
    title.className = 'inputOption';
    title.id = 'inputOption'+count;
    div.appendChild(title);
    div.appendChild(linebreak);

    count++;
    }

    
    else if(document.getElementById('domain').value == 'check'){   
    let linebreak = document.createElement("br");
    let div = document.getElementById('radio');

    let input = document.createElement('input');
    input.type = 'checkbox';
    div.appendChild(input);
    let title = document.createElement('input')
    title.placeholder = 'option' + count;
    title.className = 'inputOption';
    title.id = 'inputOption'+count;
    div.appendChild(title);
    div.appendChild(linebreak);

    count++;
    }


}


function get(){
    var selected = document.getElementById('domain').value;
    if(selected == 'short'){
        addShort();
    }
    else if(selected == 'choice'){
        addMultiple();
    }
    
    else if(selected == 'check'){
        addCheck();
    }

    clear();
}

function addShort(){
    let section = document.getElementById('section');

    let container = document.createElement('div');
    container.className = 'container';

    let question = document.createElement('label');
    question.textContent = document.getElementById("question").value;

    let textDiv = document.createElement('div');
    textDiv.className =  'msg';

    let textArea = document.createElement('textarea');
    textArea.className = 'area';
    textArea.placeholder = 'Write your answer';

    textDiv.appendChild(textArea);
    container.appendChild(question);
    container.appendChild(textDiv);
    section.appendChild(container);


}

function addMultiple(){

    let section = document.getElementById('section');

    let container = document.createElement('div');
    container.className = 'container';

    let question = document.createElement('label');
    question.textContent = document.getElementById("question").value;
    container.appendChild(question);

    const childNodes = document.querySelectorAll('.inputOption')
    let mainDiv = document.createElement('div')
    mainDiv.className = 'multidiv';

    let radioDiv = document.createElement('div');
    radioDiv.className = 'radioDiv';

    let field = document.createElement('fieldset')
    field.id = 'group'

    for (const n of childNodes) {
        let radioDiv = document.createElement('div');
        radioDiv.className = 'radioDiv';
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = 'group';
        radioDiv.appendChild(input);
        let title = document.createElement('label')
        title.textContent = n.value;
        radioDiv.appendChild(title);
        mainDiv.appendChild(radioDiv);
    
    }
    container.appendChild(mainDiv);
    section.appendChild(container);
}

function addCheck(){

    let section = document.getElementById('section');

    let container = document.createElement('div');
    container.className = 'container';

    let question = document.createElement('label');
    question.textContent = document.getElementById("question").value;
    container.appendChild(question);

    const childNodes = document.querySelectorAll('.inputOption')
    let mainDiv = document.createElement('div')
    mainDiv.className = 'multidiv';

    let radioDiv = document.createElement('div');
    radioDiv.className = 'radioDiv';

    let field = document.createElement('fieldset')
    field.id = 'group'

    for (const n of childNodes) {
        let radioDiv = document.createElement('div');
        radioDiv.className = 'radioDiv';
        let input = document.createElement('input');
        input.type = 'checkbox';
        radioDiv.appendChild(input);
        let title = document.createElement('label')
        title.textContent = n.value;
        radioDiv.appendChild(title);
        mainDiv.appendChild(radioDiv);
    
    }
    container.appendChild(mainDiv);
    section.appendChild(container);
}