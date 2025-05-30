const CurrencyConverter = {
    template: `
        <div class="card mb-4">
            <div class="card-body">
                <h2 class="card-title">Калькулятор валют</h2>
                <p class="card-subtitle mb-3">Актуальный курс катарского риала (QAR) к рублю</p>
                
                <div class="row g-3">
                    <div class="col-md-6">
                        <label for="rub" class="form-label">Рубли (RUB):</label>
                        <input type="number" class="form-control" id="rub" v-model="rub" @input="convert('rub')">
                    </div>
                    <div class="col-md-6">
                        <label for="qar" class="form-label">Катарские риалы (QAR):</label>
                        <input type="number" class="form-control" id="qar" v-model="qar" @input="convert('qar')">
                    </div>
                </div>
                
                <div class="mt-3">
                    <p class="text-muted" v-if="rate">Текущий курс: 1 QAR = {{ rate.toFixed(2) }} RUB</p>
                    <p class="text-muted" v-else>Загрузка курса...</p>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            rub: null,
            qar: null,
            rate: null
        }
    },
    methods: {
        convert(from) {
            if (!this.rate) return;
            
            if (from === 'rub' && this.rub) {
                this.qar = (this.rub / this.rate).toFixed(2);
            } else if (from === 'qar' && this.qar) {
                this.rub = (this.qar * this.rate).toFixed(2);
            }
        },
        fetchRate() {
            fetch('https://www.cbr-xml-daily.ru/daily_json.js')
                .then(response => response.json())
                .then(data => {
                    this.rate = data.Valute.QAR.Value;
                })
                .catch(error => {
                    console.error('Ошибка загрузки курса:', error);
                    this.rate = 20.5; // Запасное значение
                });
        }
    },
    mounted() {
        this.fetchRate();
    }
};