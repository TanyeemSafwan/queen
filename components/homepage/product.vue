<script lang="ts" setup>
const products = [
	{
		 id: 1,
     name: 'Party Borka Collection 1',
		 price: 1750,
		 image: 'https://i.ibb.co/G73wZsX/product-1.png'
	},
	{
		 id: 2,
		 name: 'Party Borka Collection 2',
		 price: 1750,
		 image: 'https://i.ibb.co/YhmnMVv/product-2.png'
	},
	{
		 id: 3,
		 name: 'Redy hijab Shiffon jorjet febric Double part',
		 price: 1450,
		 image: 'https://i.ibb.co/tbjDrZc/product-3.png'
	}
];
</script>

<template>
  		<!-- Start Product Section -->
		<div class="product-section">
			<div class="container">
				<div class="row">

					<!-- Start Column 1 -->
					<div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 class="mb-4 section-title">Designed with superior fabrics.</h2>
						<p class="mb-4">Welcome to our clothing brand where every piece is meticulously crafted and designed with superior fabrics. Elevate your style with our collection of premium clothing that ensures both comfort and fashion meet harmoniously. </p>
						<p><a href="#" class="btn btn-dark">Explore</a></p>
					</div> 
					<!-- End Column 1 -->

					<!-- Start Column 2 -->
					<div v-for="product in products" :key="product.id" class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="#">
							<img :src="product.image" :alt="product.name" class="img-fluid product-thumbnail height">
							<h3 class="product-title">{{ product.name }}</h3>
							<strong class="product-price">{{ product.price }}৳</strong>

							<span class="icon-cross">
								<img src="~/assets/images/cross.svg" class="img-fluid">
							</span>
						</a>
					</div> 
				</div>
			</div>
		</div>
		<!-- End Product Section -->
</template>

<style scoped>
.height {
	height: 300px;
}
</style>