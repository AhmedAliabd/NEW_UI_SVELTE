<script>
    import {login} from "../../features/authServices.js"
    let email = "";
    let password = "";
    let errorMsg = ""
    const handleSubmit = async(e)=>{
        e.preventDefault();
        errorMsg = "";
        //need some serliztion on the email and password
        try{
          await login({email, password})
          
        }catch(error){
            errorMsg =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
        }
    }
</script>


<div class="container mx-auto px-4 space-y-5">
    <div class="grid h-[75vh] place-content-center gap-5">
        <form on:submit={handleSubmit}>
            <div class="card card-bordered shadow-xl bg-base-100 w-96">
                <div class="card-body">
                    <h2 class="card-title">Login</h2>
    
                    <label class="label">
                        <span class="label-text">Email Address</span>
                    </label>
                    <input bind:value={email}  type="email" placeholder="example@domain.com"
                        class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span  class="label-text">Password</span>
                    </label>
                    <input bind:value={password} type="password" class="input input-bordered w-full max-w-xs" />
    
                    <div class="card-actions mt-5">
                        <button disabled={!(email.length >= 5 && password.length >= 5)} class="btn btn-primary w-full" href="dashboard.html">Login</button>
                    </div>

                    <p class="text-rose-700 ">{errorMsg}</p>
                </div>
            </div>
        </form>
        
    </div>
</div>