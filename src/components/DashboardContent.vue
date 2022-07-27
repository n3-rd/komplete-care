<script>
export default {
    data() {
        return {
            dashboardData: [],
            xray: [],
            ultrasoundScan: []
        }
    },
    methods: {
        fetchData() {
            var myHeaders = new Headers();
            myHeaders.append("Accept", "application/json");
            myHeaders.append("Authorization", `Bearer ${import.meta.env.VITE_AUTH}`);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("https://testdrive.kompletecare.com/api/investigations", requestOptions)
                .then(response => response.json())
                .then(result => {
                    this.dashboardData = result.data;
                    this.xray = result.data[0];
                    this.xray = result.data[1];
                })
                .catch(error => console.log('error', error));
        }
    },
    mounted() {
        this.fetchData();
        console.log(this.dashboardData)
    }
}


</script>

<template>
    <div class="page">
        <div class="profile-options flex flex-row flex-end text-primary avenir">
            <div class="profile-options__item opacity-7">Take a tour</div>
            <div class="profile-options__item flex">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                    role="img" class="iconify iconify--ic" width="1.2em" height="1.2em"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z">
                    </path>
                </svg>
            </div>
            <div class="profile-options__item opacity-7 flex">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                    role="img" class="iconify iconify--ic" width="1.2em" height="1.2em"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71L18 16z">
                    </path>
                </svg>
            </div>
            <div class="profile-options__item doctor-image__container">
                <div class="doctor-image"></div>
            </div>
        </div>

        <div class="main-content">
            <div class="main-content-headers avenir text-primary">
                <h2 class="main-header">Update Patient Medical Record</h2>
                <div class="main-header__small text-muted">
                    Click the tabs to view and edit patient medical details
                </div>
            </div>


            <div class="main-content-box">

                <div class="box-data">
                    <h3 class="box-data-title avenir text-primary">X-Ray</h3>
                    <div class="box-data-options">

                        <div class="grid">
                            <div class="grid-items">
                                <div class="checkbox-with-label">
                                    <input type="checkbox" id="checkbox1" name="checkbox1" />
                                    <label for="checkbox1">
                                        Chest
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="box-data-divider">
                            <div class="box-data-divider-line"></div>
                        </div>

                    </div>



                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page {
    background-color: #F5F5FB;
}

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

    .doctor-image__container {
        width: 40px;
        height: 40px;

        .doctor-image {
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

.main-content {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;

    .main-content-headers {
        margin-top: 20px;
        margin-left: 20px;

        .main-header {
            font-weight: 900;
            font-size: 32px;
            line-height: 44px;
        }

        .main-header__small {
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0.3px;
        }
    }
}

.main-content-box {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    .box-data {
        margin-top: 20px;
        margin-left: 94px;
        margin-right: 20px;

        .box-data-title {
            font-weight: 900;
            font-size: 25px;
            line-height: 18px;
        }

        .box-data-options {
            color: #000;
            margin-top: 25px;

            input[type="checkbox"]:hover {
                cursor: pointer;
            }


            label {
                font-weight: 700;
                font-size: 14px;
                line-height: 17px;
                font-family: Lato, Helvetica, Arial, sans-serif;
            }

            .grid {
                // grid with 4 rows
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-gap: 10px;

            }
        }

        .box-data-divider {
            margin-top: 20px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 1px;
            background-color: #E0E0E0;
        }
    }

}
</style>