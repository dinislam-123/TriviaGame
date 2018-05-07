
var total=0;

var objdetail =[{no:1, q:'what is My Name ?', a1:'john', a2:'Steven', a3:'Michele',a4:'Islam',ans:'Islam'},
                {no:2, q:'What Programming Do I like?', a1:'JavaScript',a2:'c#',a3:'PHP',a4:'Node.js',ans:'JavaScript'},
                {no:3, q:'Who is The king of Jungle ?',a1:'Lion',a2:'Tiger',a3:'Horse', a4:'Elephand', ans:'Lion'},
                {no:4, q:'who is The king of bird ?',a1:'Parot',a2:'Eagle',a3:'Sparrow',a4:'Condor', ans:'Eagle'},
                {no:5, q:'What does mean JS ?',a1:'JavaScript',a2:'Nodejs',a3:'Just school',a4:'Justice System',ans:'JavaScript'}]


var int;

$(document).ready(function()
{

    $('#div1').hide();
    $('#result').hide();

    $('#start').on('click', function()
    {
        $('.div2').hide();
        $('#div1').show();

    function countDown(i) 
    {   
         int = setInterval(function () 
            {
                if( i==0)
                {
                    alert("Time Up...");
                    $('#result').show();
                    $('#div1').hide();
                    $('#div2').hide();
                   
                    document.getElementById("pr1").innerHTML = "Correct Answer : " + total;
                    document.getElementById("pr2").innerHTML = "Incorrect Answer : " + (5-total);
                    document.getElementById("ptime").innerHTML = " ";
                                
                 clearInterval(int);
                //  window.close();
                 }
                document.getElementById("ptime").innerHTML = "Time Remaining : " + i +" Seconds";
                 i--          
            }, 1000);
    }
    countDown(10);
    });

    var mbody = $('.center');
    var div = $('#div1');

    for(var i=0; i<objdetail.length; i++)
    {

    //    var mno = $('<p>');
    //         mno.text(objdetail[i].no);

        var mq = $('<p>');
            mq.text(objdetail[i].q);
        div.append(mq);

        // this code for radio button -1

        var r1 = $('<input type="radio">');
            r1.attr('value',objdetail[i].a1);
            r1.attr('id',objdetail[i].a1);
            r1.attr('name', objdetail[i].no);
            r1.attr('answer',objdetail[i].ans);

        var r1l = $('<label>');
            r1l.text(objdetail[i].a1);
            div.append(r1);
            div.append(r1l);
        // this code for radio button-2---

        var r2 = $('<input type="radio">');
            r2.attr('value',objdetail[i].a2);
            r2.attr('id',objdetail[i].a2);
            r2.attr('name', objdetail[i].no);
            r2.attr('answer',objdetail[i].ans);

        var r2l = $('<label>');
            r2l.text(objdetail[i].a2);
            div.append(r2);
            div.append(r2l);

        // this code for radio button -3--

        var r3 = $('<input type="radio">');
            r3.attr('value',objdetail[i].a3);
            r3.attr('id',objdetail[i].a3);
            r3.attr('name', objdetail[i].no);
            r3.attr('answer',objdetail[i].ans);

        var r3l = $('<label>');
            r3l.text(objdetail[i].a3);
            div.append(r3);
            div.append(r3l);

        // this code for radio button -4-

        var r4 = $('<input type="radio">');
            r4.attr('value',objdetail[i].a4);
            r4.attr('id',objdetail[i].a4);
            r4.attr('name', objdetail[i].no);
            r4.attr('answer',objdetail[i].ans);

        var r4l = $('<label>');
            r4l.text(objdetail[i].a4);
            div.append(r4);
            div.append(r4l);
       
        div.append('<br>');
        div.append('<br>');
    }
    var mdone = $('<button id="done" value="done">Done</button>')
    div.append(mdone);
    mbody.append(div);

    // this for done button result---

    $('#done').on('click', function()
    {
        $('#div1').hide();
        $('#div2').hide();
        $('#result').show();
        clearInterval(int);
        document.getElementById("pr1").innerHTML = "Correct Answer : " + total;
        document.getElementById("pr2").innerHTML = "Incorrect Answer : " + (5-total);
        document.getElementById("ptime").innerHTML = "  ";
        // window.close();

    })
    // this is for input question and answer...

    var m = 0;
    $('input[type="radio"]').on('click',function()
    {
        var value = $(this).attr('value');
        var answer = $(this).attr('answer');
        m = m+1;
        if(m == 1)
        {
             if(value == answer)
              {
                total = total + 1;
              }
              m = 0;
         }
   });
});
