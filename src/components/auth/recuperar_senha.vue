<template lang="html">
   <body id="LoginForm">
        <div class="container">
            <div class="login-form" style="margin:40px 0 0 0">
                <div class="main-div">

                  
                        
                        <div class="panel">
                            <h2>SGL</h2>
                            <p>Digite o e-mail para recuperar</p>
                        </div>
                        <form method="POST" action="">
                         
                            <div class="form-group text-left">
                                <input id="email" type="email" placeholder="Seu e-mail" class="form-control @error('email') is-invalid @enderror" name="email" value="" required autocomplete="email" autofocus>
                               
                                    <span class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>
                              
                            </div>
    
                            <button type="submit" class="btn btn-primary">Recuperar</button>
                        </form>
                   

                </div>
            </div>
        </div>
        </div>
    </body>
</template>

<script>
export default {
    name: 'recuperar_senha'
}
</script>

<style lang="css">
      body#LoginForm{ background-image:url("http://www.cronosolucoes.com.br/wp-content/uploads/2018/10/765090-most-popular-technology-background-images-1920x1080-hd-for-mobile.jpg"); background-repeat:no-repeat; background-position:center; background-size:cover; padding:10px; height:100vh ;}
        .form-heading { color:#fff; font-size:23px;}
        .panel h2{ color:#ffffff; font-size:18px; margin:0 0 8px 0;}
        .panel p { color:#fff; font-size:14px; margin-bottom:30px; line-height:24px;}
        .login-form .form-control {
            background: #f7f7f7 none repeat scroll 0 0;
            border: 1px solid #d4d4d4;
            border-radius: 4px;
            font-size: 14px;
            height: 50px;
            line-height: 50px;
        }
        .main-div {
           
            border-radius: 2px;
            margin: 10px auto 30px;
            max-width: 38%;
            padding: 50px 70px 70px 71px;
        }
        .login-form .form-group {
            margin-bottom:10px;
        }
        .login-form{ text-align:center;}
        .forgot a {
            color: #fff;
            font-size: 14px;
            text-decoration: underline;
        }
        .login-form  .btn.btn-primary {
            background: #f0ad4e none repeat scroll 0 0;
            border-color: #f0ad4e;
            color: #ffffff;
            font-size: 14px;
            width: 100%;
            height: 50px;
            line-height: 50px;
            padding: 0;
        }
        .forgot {
            text-align: left; margin-bottom:30px;
        }
        .botto-text {
            color: #ffffff;
            font-size: 14px;
            margin: auto;
        }
        .login-form .btn.btn-primary.reset {
            background: #ff9900 none repeat scroll 0 0;
        }
        .back { text-align: left; margin-top:10px;}
        .back a {color: #444444; font-size: 13px;text-decoration: none;}
</style>