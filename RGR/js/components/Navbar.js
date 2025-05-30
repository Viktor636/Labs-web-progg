const Navbar = {
    template: `
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img src="images/logo.png" alt="Логотип" height="30" class="d-inline-block align-top me-2">
                    Газпром газораспределение
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" :class="{active: currentPage === 'index'}" href="index.html">О компании</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :class="{active: currentPage === 'news'}" href="news.html">Новости</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :class="{active: currentPage === 'currency'}" href="currency.html">Курс валют</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :class="{active: currentPage === 'contacts'}" href="contacts.html">Контакты</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :class="{active: currentPage === 'video'}" href="video.html">Видео</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `,
    props: {
        currentPage: String
    }
};