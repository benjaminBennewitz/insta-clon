/*###############################
###
###     MAIN SCRIPT INSTAGRAM CLON
###     version 1.0.0
###     author: Benjamin Benenwitz
###
###
***       ██████╗  ▀█
***       ██╔══██╗ █▄
***       ██████╦╝
***       ██╔══██╗
***       ██████╦╝
***       ╚═════╝
###
#################################*/

/* 
*** ARRAY DEKLARATIONS
*/
let posts = [
    {
        'profile':'../assets/profile.png',
        'autor':'Bsquared',
        'days': ' • 2 Tage',
        'location':'Sausalitos Mönchengladbach',
        'postpicture':'../assets/drinking.jpg',
        'likes':23,
        'bookmark':false,
        'follower1':'../assets/follower-01.png',
        'follower2':'../assets/follower-02.png',
        'follower3':'../assets/follower-03.png',
        'postText':'Corona sollte man mit allen teilen, besonders mit Familie und Freunden',
        'user1':'Spongebob:',
        'comment1':'Ich bin bereeiit!!!',
        'user2':'Patrick:',
        'comment2':'äääähhhhhhhhhhh...',
        'user3':'Sandy:',
        'comment3':'Kommt jemand mit an die frische Luft?',
    },
    {
        'profile':'../assets/profile.png',
        'autor':'Marius',
        'days': ' • 5 Tage',
        'location':'Holland Amsterdam',
        'postpicture':'../assets/friends.jpg',
        'likes':15,
        'bookmark':false,
        'follower1':'../assets/follower-04.png',
        'follower2':'../assets/follower-05.png',
        'follower3':'../assets/follower-06.png',
        'postText':'Lieblingsmenschen...',
        'user1':'Claudia:',
        'comment1':'Was für ein Trip :-)',
        'user2':'Malleck:',
        'comment2':'Mit Euch würde ich überall hin gehen/fahren/fliegen/reiten/kriechen...',
        'user3':'Paula:',
        'comment3':'Reiten? Laughting Out Loud',
    },
];

/* 
*** INITIALISE CONTENT
*/
function init(){
    showPosts();
}


/* 
*** GENERATE POSTS
*** iteration trough JSON Array
*** generate html content
*/
function showPosts(){
    let postSection = document.getElementById('post');
    postSection.innerHTML = '';

    for (let i = 0; i < posts.length; i++){
        const post = posts[i];
    
    postSection.innerHTML +=`

    <div class="posts">
        <div class="flex-posts-header-outer margin">
            <div class="flex-posts-header">
                <img class="posts-header-img" src="${post['profile']}"/>
            
                <div class="flex-col">
                    <p><b>${post['autor']}</b>${post['days']}</p>
                    <p>${post['location']}</p>
                </div>
            </div> 
            <img class="posts-header-img" src="assets/dots.png"/>
        </div>
        <img class="img-posts" src="${post['postpicture']}"/>

        <div class="flex-posts-header-outer margin-t">
            <div class="flex-posts-header">
                <div id="loveIt" onclick="likeBtn()" class="like-icon"></div>
                <img onclick="sorry('Ohne Funktion')" class="posts-icons" src="assets/new.png"/>
                <img onclick="sorry('Ohne Funktion')" class="posts-icons" src="assets/message.png"/>
            </div>
                <div id="${i}" onclick="bookmark(${i})" class="bookmark"></div>
        </div>
        <div class="flex-like-section margin-t">
            <img class=""      src="${post['follower1']}" width="32px" height="32px"/>
            <img class="minus" src="${post['follower2']}" width="32px" height="32px"/>
            <img class="minus" src="${post['follower3']}" width="32px" height="32px"/>

            <div class="margin-l"><p>Gefällt </p><p>${post['likes']} Mal</p></div>
        </div>
        <div class="margin-t"><p>${post['postText']}</p></div>
        <div class="margin-t-sm"><p><b>${post['user1']} </b>${post['comment1']}</p></div>
        <div class="margin-t-sm"><p><b>${post['user2']} </b></p>${post['comment2']}</div>
        <div class="margin-t-sm"><p><b>${post['user3']} </b>${post['comment3']}</p></div>
    </div>
    `;
    }
}


/* 
*** SETTING BOOKMARK
*** change classes with different bookmark images
*/
function bookmark(i) {
    let isTrue = posts[i].bookmark;

   if(!isTrue){
        posts[i].bookmark = true;
        document.getElementById(`${i}`).classList.remove('bookmark');
        document.getElementById(`${i}`).classList.add('bookmark-active');
   }else{
    posts[i].bookmark = false;
    document.getElementById(`${i}`).classList.add('bookmark');
    document.getElementById(`${i}`).classList.remove('bookmark-active');
   }
}








/* 
*** function for general alert, for not yet implemented features
*** shows an brower alert by clicking on an element with no function
*/
function sorry(text){
    alert(text);
}

