<template>

    <div>
        <div class="profile-options flex flex-row flex-end text-primary">
            <div class="profile-options__item opacity-7">Take a tour</div>
            <div class="profile-options__item">Item 2</div>
            <div class="profile-options__item opacity-7">Item 3</div>
            <div class="profile-options__item">Item 4</div>
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
        margin-left: 10px;
        cursor: pointer;
        font-weight: 600;
    }
}
</style>