/**
 * Created by Gatsby on 2017/2/16.
 */
var vm=new Vue({
    el:'#container',
    data:{
        items:[{
            name:'椰子树',
            price:1,
            count:1
        }],
        inputName:'',
        inputPrice:null,
        inputNum:null
    },
    computed:{
        priceTotal:function(){
            var price=0;
            for(var i=0;i<this.items.length;i++){
                price+=this.items[i].price*this.items[i].count;
            }
            return price.toFixed(2);
        }
    },
    methods:{
        addCommodity:function(length){
            if(this.inputNum==null || this.inputName==null || this.inputPrice==null){
                alert('请填写完整商品信息')
            }else{
                if(this.inputNum>10 || this.inputNum<1){
                    alert('请输入1-10之间的数字')
                }else{
                    this.items.push({
                        name:this.inputName,
                        price:this.inputPrice,
                        id:'goods'+length,
                        count:this.inputNum
                    })
                };
                this.inputName=null;
                this.inputPrice=null;
                this.inputNum=null
            }
        },
        addNum:function(index){
            var current=this.items[index]
            if(current.count>=10){
                alert('库存不够')
            }else{
                current.count++;
            }
        },
        reduceNum:function(index){
            var current=this.items[index]
            if(current.count<=1){
                alert('数量不能小于1')
            }else{
                current.count--
            }
        },
        removeGoods:function(index){
            this.items.splice(index,1)
        }
    }
})