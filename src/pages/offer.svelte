<Page name="offer">

  <a class="link external" href="https://cent.app/transfer/ovy4OBnJ7e">Open Google</a>

</Page>

<script>
    import {Page} from 'framework7-svelte';
    const tg = window.Telegram.WebApp;

    
    tg.expand(); //расширяем на все окно  
  //  export let f7router;
  tg.MainButton.text = "Changed Text"; //изменяем текст кнопки 
//  tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
 // tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
//  tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
 // tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры
 // tg.MainButton.show()
 // tg.MainButton.showProgress(false)
 //tg.HapticFeedback.selectionChanged()
//const url = "ya.ru"
 Telegram.WebApp.onEvent('mainButtonClicked', function(){
//	f7router.navigate('/https://ya.ru', { transition: 'f7-cover' })
  //tg.HapticFeedback.selectionChanged()
  //tg.openTelegramLink(url)
  //tg.openLink(url)
	//при клике на основную кнопку отправляем данные в строковом виде
});
 //tg.openTelegramLink("https://ya.ru")
</script>
