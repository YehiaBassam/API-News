var req = new XMLHttpRequest 
var news
var search
var myrow = document.getElementById("myrow")
var mybtn = document.getElementById("mybtn")
var mybtn = document.getElementById("myinput")
var links = document.getElementsByClassName("link")
var menu = document.getElementsByClassName("menu")
var category = "general"
var country = "eg"


getnews (country,category)
cahnge ()
changecountry ()

// Elcode dh feh Moshkela
mybtn.addEventListener("click",function(){

    search = myinput.value
    globalsearch(search)
})


function cahnge ()
{
    for ( var k=0 ; k<links.length ; k++ )
        {
            links[k].addEventListener("click",function(e)
            {
                category = e.target.innerHTML
                changecountry ()
                getnews (country,category)
            })
        }
}

function changecountry ()
{
    for ( var j=0 ; j<menu.length ; j++ )
        {
            menu[j].addEventListener("click",function(e)
            {
                country = e.target.innerHTML
                getnews (country,category)
            })
         }    
}

function getnews (country,category)
{
var url = "https://newsapi.org/v2/top-headlines?country="+country+"&category="+category+"&apiKey=ecdacc09b4594a9594cfa74cb7dcd515"

req.open("GET",url)

req.onreadystatechange = function ()
{
    if (req.status == 200 && req.readyState == 4 )
        {
           news = JSON.parse(req.response)
           news = news.articles
           display () 
        }
}

req.send()
}

function display ()
{
 var col =""

 for (var i=0 ; i<news.length ; i++)
    {
        col+=`<div class="col-md-4">
            <img src=`+news[i].urlToImage+` class="img-fluid">
            <h3>`+news[i].title+`</h3>
            <p class="text-muted">`+news[i].description+`</p>
            </div>`
    }
myrow.innerHTML = col

}

// Elcode dh feh Moshkela
function globalsearch (search)
{
    var temp = "https://newsapi.org/v2/everything?q="+search+"&from=2019-08-17&sortBy=publishedAt&apiKey=ecdacc09b4594a9594cfa74cb7dcd515"

req.open("GET",temp)

req.onreadystatechange = function ()
{
    if (req.status == 200 && req.readyState == 4 )
        {
           news = JSON.parse(req.response)
           news = news.articles
           display () 
        }

}

req.send()
}

