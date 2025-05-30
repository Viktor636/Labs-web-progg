const NewsCard = {
    template: `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">{{ newsItem.title }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{ newsItem.date }}</h6>
                    <p class="card-text">{{ newsItem.preview }}</p>
                    <button @click="toggleFullText" class="btn btn-outline-primary btn-sm">
                        {{ showFull ? 'Скрыть' : 'Показать полностью' }}
                    </button>
                    <div v-if="showFull" class="mt-3" v-html="newsItem.fullText"></div>
                </div>
            </div>
        </div>
    `,
    props: {
        newsItem: Object
    },
    data() {
        return {
            showFull: false
        }
    },
    methods: {
        toggleFullText() {
            this.showFull = !this.showFull;
        }
    }
};