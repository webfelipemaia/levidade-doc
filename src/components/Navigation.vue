<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Download</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'NavigationComponent',
  props: {}
}
</script>