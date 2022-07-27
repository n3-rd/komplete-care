<template>

    <div>
        <div class="profile-options flex flex-row flex-end text-primary avenir">
            <div class="profile-options__item opacity-7">Take a tour</div>
            <div class="profile-options__item flex">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"></path></svg>
            </div>
            <div class="profile-options__item opacity-7 flex">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71L18 16z"></path></svg>
            </div>
            <div class="profile-options__item doctor-image__container"><div class="doctor-image"></div></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.profile-options {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
    margin-right: 20px;

    .profile-options__item {
        margin-left: 44px;
        cursor: pointer;
        font-weight: 600;
    }
    .doctor-image__container{
  width: 40px;
            height: 40px;
        .doctor-image{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #fff;
            background-image: url('doctor.png');
            background-size: cover;
            background-position: center;
        }
    }
}
</style>