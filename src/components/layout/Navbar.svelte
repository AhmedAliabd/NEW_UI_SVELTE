<script>
  import {user} from "../../stores/user"
  
</script>
  <div class="container mx-auto">
    <div class="navbar bg-base-100">
        <div class="flex-1">
          <a href="/" class="btn btn-ghost normal-case text-xl">
            <img width="40px" alt="logo"src="/assets/img/logo.svg"></a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li><a href="/app/login">Login</a></li>
            <li><a href="/app/register">Register</a></li>
            <li><a href="/">Logout</a></li>
            <li><a href="/">{$user?.name}</a></li>

          </ul>
        </div>
      </div>
  </div>