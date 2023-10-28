<script lang="ts" setup>
const route = useRoute();
console.log('current name', route.name);
const navVisible = ref(false);
</script>

<template>
  <div class="header-size">
    		<!-- Start Header/Navigation -->
		<nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

			<div class="container">
				<a class="navbar-brand" href="/">Queen's Elegance<span>.</span></a>

				<button @click="navVisible = !navVisible" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div :class="navVisible ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'" id="navbarsFurni">
					<ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
						<li :class="route.name?.toString().includes('index') ? 'nav-item active' : ''">
							<a class="nav-link" href="/">Home</a>
						</li>
						<li :class="route.name?.toString().includes('products') ? 'nav-item active' : ''"><a class="nav-link" href="/products">Shop</a></li>
						<li><a class="nav-link" href="">About us</a></li>
						<li><a class="nav-link" href="">Services</a></li>
						<li><a class="nav-link" href="">Blog</a></li>
						<li><a class="nav-link" href="">Contact us</a></li>
					</ul>

					<ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
						<li><a class="nav-link" href="#"><img src="~/assets/images/user.svg"></a></li>
						<li><a class="nav-link" href=""><img src="~/assets/images/cart.svg"></a></li>
					</ul>
				</div>
			</div>
				
		</nav>
		<!-- End Header/Navigation -->
  </div>
</template>

<style>
.header-size {
  width: auto;
  height: fit-content;
  background: rgb(224, 203, 203);
}
</style>