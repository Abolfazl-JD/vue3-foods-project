<template>
  <nav>
      <ul>
            <li>
                <router-link to="/">
                    <AppLogo/>
                </router-link>
            </li>
            <li>
                <router-link to="/restaurants">Restaurants</router-link>
            </li>
        </ul>
        <div class="side-links">
            <router-link to="/login">login</router-link>
            <router-link to="/control-panel">control panel</router-link>
        </div>
    </nav>
</template>

<style scoped>
.side-links{
    display: flex;
    gap: 30px;
}
</style>
