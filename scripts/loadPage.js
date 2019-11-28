var currentUid = null;

firebase.auth().onAuthStateChanged(function(user) {
    if (user && user.uid != currentUid) {

        document.body.innerHTML = ("<h1 id=\"h1\"></h1>" +
            "<h2 id=\"h2\"></h2>" +
            "<div class=\"buttons\">" +
                "<div class=\"upload\" id=\"upload\"><div class=\"tooltip\"></div></div>" +
                "<div class=\"download\" id=\"download\"><div class=\"tooltip\"></div></div>" +
            "</div>");

        currentUid = user.uid;
        var h1 = document.getElementById("h1");
        h1.innerHTML = '<h1> User ' + user.displayName + ' logged in </h1>';

        var h2 = document.getElementById("h2");
        h2.innerHTML = '<h2> Upload a file by selecting the upload button.<br />Download a file by searching its name.</h2>';

        var uploadBut = document.getElementById("upload");
        uploadBut.innerHTML = ("<label for=\"file-input\" class=\"upload-label\">" +
            "<i class=\"fas fa-file-upload\" style='font-size:100px';\n'></i>" +
            "</label>" +
            "<input class=\"file-input\" id=\"file-input\" type=\"file\" />" +
            "<div class=\"tooltip\">upload</div>");

        document.querySelector("#file-input").addEventListener("change", function(){
            if(this.files.length===0) return;

            var file = this.files[0];

            var fileMeta = {
                name: file.name,
                size: file.size,
                //We allow gcp to infer mimetype here
            }

            var storageRef = firebase.storage().ref();
            var fileRef = storageRef.child(file.name);

            fileRef.put(file, fileMeta).then(function(snapshot) {
                console.log('Uploaded a file!');
            });
        }, false);

        var downloadBut = document.getElementById("download");
        downloadBut.innerHTML = ("<i class=\"fas fa-file-download\" style='font-size:100px'></i>" +
            "<div class=\"tooltip\">download</div>");

        downloadBut.onclick = function(){
            var filename = prompt("Please enter the name (and extension) of the file you wish to download", "filename.png");

            if (filename == null || filename == "") return;

            var storage = firebase.storage();
            var pathRef = storage.ref(filename);

            pathRef.getDownloadURL().then(function(url) {
                window.open(url, '_blank');
            }).catch(function(error) {
                switch (error.code) {
                    case 'storage/object-not-found':
                        console.log('object not found, no download :(');
                        break;
                    case 'storage/unauthorized':
                        console.log('user does not have sufficient permissions, no download :(')
                        break;
                    case 'storage/unknown':
                        console.log('unknown error, no download :(');
                        break;
                }
            });
        }

    } else {
        // Sign out operation. Reset the current user UID.
        currentUid = null;
        console.log("no user signed in");
    }
});
