var vm = new Vue({
    el: '#desired-prefs',
    data: {
      allArea: { "checked": false},
      areas: [
        {"id":1,"name":"北海道・東北","checked": false},
        {"id":2,"name":"関東","checked": false},
        {"id":3,"name":"甲信越・北陸","checked": false},
        {"id":4,"name":"東海","checked": false},
        {"id":5,"name":"関西","checked": false},
        {"id":6,"name":"中国・四国","checked": false},
        {"id":7,"name":"九州・沖縄","checked": false}
      ],
      prefs: [
        {"id":1,"name":"北海道","areaId": 1,"checked": false},
        {"id":2,"name":"青森県","areaId": 1,"checked": false},
        {"id":3,"name":"岩手県","areaId": 1,"checked": false},
        {"id":4,"name":"宮城県","areaId": 1,"checked": false},
        {"id":5,"name":"秋田県","areaId": 1,"checked": false},
        {"id":6,"name":"山形県","areaId": 1,"checked": false},
        {"id":7,"name":"福島県","areaId": 1,"checked": false},
        {"id":8,"name":"茨城県","areaId": 2,"checked": false},
        {"id":9,"name":"栃木県","areaId": 2,"checked": false},
        {"id":10,"name":"群馬県","areaId": 2,"checked": false},
        {"id":11,"name":"埼玉県","areaId": 2,"checked": false},
        {"id":12,"name":"千葉県","areaId": 2,"checked": false},
        {"id":13,"name":"東京都","areaId": 2,"checked": false},
        {"id":14,"name":"神奈川県","areaId": 2,"checked": false},
        {"id":15,"name":"新潟県","areaId": 3,"areaId": 3,"checked": false},
        {"id":16,"name":"富山県","areaId": 3,"checked": false},
        {"id":17,"name":"石川県","areaId": 3,"checked": false},
        {"id":18,"name":"福井県","areaId": 3,"checked": false},
        {"id":19,"name":"山梨県","areaId": 3,"checked": false},
        {"id":20,"name":"長野県","areaId": 3,"checked": false},
        {"id":21,"name":"岐阜県","areaId": 4,"checked": false},
        {"id":22,"name":"静岡県","areaId": 4,"checked": false},
        {"id":23,"name":"愛知県","areaId": 4,"checked": false},
        {"id":24,"name":"三重県","areaId": 4,"checked": false},
        {"id":25,"name":"滋賀県","areaId": 5,"checked": false},
        {"id":26,"name":"京都府","areaId": 5,"checked": false},
        {"id":27,"name":"大阪府","areaId": 5,"checked": false},
        {"id":28,"name":"兵庫県","areaId": 5,"checked": false},
        {"id":29,"name":"奈良県","areaId": 5,"checked": false},
        {"id":30,"name":"和歌山県","areaId": 5,"checked": false},
        {"id":31,"name":"鳥取県","areaId": 5,"checked": false},
        {"id":32,"name":"島根県","areaId": 6,"checked": false},
        {"id":33,"name":"岡山県","areaId": 6,"checked": false},
        {"id":34,"name":"広島県","areaId": 6,"checked": false},
        {"id":35,"name":"山口県","areaId": 6,"checked": false},
        {"id":36,"name":"徳島県","areaId": 6,"checked": false},
        {"id":37,"name":"香川県","areaId": 6,"checked": false},
        {"id":38,"name":"愛媛県","areaId": 6,"checked": false},
        {"id":39,"name":"高知県","areaId": 6,"checked": false},
        {"id":40,"name":"福岡県","areaId": 7,"checked": false},
        {"id":41,"name":"佐賀県","areaId": 7,"checked": false},
        {"id":42,"name":"長崎県","areaId": 7,"checked": false},
        {"id":43,"name":"熊本県","areaId": 7,"checked": false},
        {"id":44,"name":"大分県","areaId": 7,"checked": false},
        {"id":45,"name":"宮崎県","areaId": 7,"checked": false},
        {"id":46,"name":"鹿児島県","areaId": 7,"checked": false},
        {"id":47,"name":"沖縄県","areaId": 7,"checked": false}
      ]
    },
    methods: {
      checkArea: function(id) {
        var i = id - 1
        var checked = !this.areas[i].checked
        this.areas[i].checked = checked

        this.prefs.map(pref => {
            if(pref.areaId === id) {
              this.prefs[pref.id - 1].checked = checked
            }
        })
      },
      checkPref: function(id) {
        var i = id - 1
        this.prefs[i].checked = !this.prefs[i].checked

        var areaId = this.prefs[i].areaId
        var prefs = this.prefs.filter(pref => pref.areaId === areaId)

        if (prefs.every(pref => pref.checked === true)) { this.areas[areaId - 1].checked = true }
        if (!prefs.every(pref => pref.checked === true)) { this.areas[areaId - 1].checked = false }
      },
      checkAllArea: function() {
        var checked = !this.allArea.checked
        this.allArea.checked = checked
        this.areas.map(area => this.areas[area.id - 1].checked = checked)
        this.prefs.map(pref => this.prefs[pref.id - 1].checked = checked)
      }
    }
});
