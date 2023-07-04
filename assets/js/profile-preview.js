const profileImage = document.getElementById('dp-image')
const previewImage = document.getElementById('profile-preview');

profileImage.addEventListener('change',function(event){
        if(event.target.files.lenght == 0){
            return;
        }

        const tempUrl = URL.createObjectURL(event.target.files[0]);
        previewImage.setAttribute('src',tempUrl);
})