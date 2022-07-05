$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Categorias.feature");
formatter.feature({
  "name": "Criar categorias",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.background({
  "name": "Criar categorias",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu cliquei no menu",
  "keyword": "Dado "
});
formatter.match({
  "location": "CategoriaSetps.queEuCliqueiNoMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu criar duas categorias",
  "keyword": "Quando "
});
formatter.match({
  "location": "CategoriaSetps.euCriarDuasCategorias()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar Categorias",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@ValidarCategorias"
    }
  ]
});
formatter.step({
  "name": "o app apresenta as duas categorias criadas",
  "keyword": "Entao "
});
formatter.match({
  "location": "CategoriaSetps.oAppApresentaAsDuasCategoriasCriadas()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Criar categorias",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu cliquei no menu",
  "keyword": "Dado "
});
formatter.match({
  "location": "CategoriaSetps.queEuCliqueiNoMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu criar duas categorias",
  "keyword": "Quando "
});
formatter.match({
  "location": "CategoriaSetps.euCriarDuasCategorias()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar opcao de mudar posicao",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@MoverCategorias"
    }
  ]
});
formatter.step({
  "name": "eu tocar e segurar em uma categoria",
  "keyword": "E "
});
formatter.match({
  "location": "CategoriaSetps.euTocarESegurarEmUmaCategoria()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o app apresenta a opcao para mudar de posicao",
  "keyword": "Entao "
});
formatter.match({
  "location": "CategoriaSetps.oAppApresentaAOpcaoParaMudarDePosicao()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Criar categorias",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu cliquei no menu",
  "keyword": "Dado "
});
formatter.match({
  "location": "CategoriaSetps.queEuCliqueiNoMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu criar duas categorias",
  "keyword": "Quando "
});
formatter.match({
  "location": "CategoriaSetps.euCriarDuasCategorias()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "excluir categoria",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@ExcluirCategoria"
    }
  ]
});
formatter.step({
  "name": "eu excluir uma categoria",
  "keyword": "E "
});
formatter.match({
  "location": "CategoriaSetps.euExcluirUmaCategoria()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o app exibe apenas uma categoria",
  "keyword": "Entao "
});
formatter.match({
  "location": "CategoriaSetps.oAppExibeApenasUmaCategoria()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Lista.feature");
formatter.feature({
  "name": "Criar Lista",
  "description": "eu como um usu�rio\nquero criar minhas anota��es e/ ou listas de verifica��o com um ou mais itens\npara organizar minhas tarefas",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@lista"
    }
  ]
});
formatter.background({
  "name": "criar lista",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu cliquei em adicionar lista",
  "keyword": "Dado "
});
formatter.match({
  "location": "ListaSteps.queEuCliqueiEmAdicionarLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu selecionar a opca checklist",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaSteps.euSelecionarAOpcaChecklist()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar e salvar o titulo",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.informarESalvarOTitulo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu adicionar tres itens a lista",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.euAdicionarTresItensALista()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validar criacao da lista",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@lista"
    },
    {
      "name": "@CriarLista"
    }
  ]
});
formatter.step({
  "name": "o app exibe a lista criada",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaSteps.oAppExibeAListaCriada()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "criar lista",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu cliquei em adicionar lista",
  "keyword": "Dado "
});
formatter.match({
  "location": "ListaSteps.queEuCliqueiEmAdicionarLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu selecionar a opca checklist",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaSteps.euSelecionarAOpcaChecklist()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar e salvar o titulo",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.informarESalvarOTitulo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu adicionar tres itens a lista",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.euAdicionarTresItensALista()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "marcar itens como checked",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@lista"
    },
    {
      "name": "@MarcarChecked"
    }
  ]
});
formatter.step({
  "name": "eu clicar sobre um item",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaSteps.euClicarSobreUmItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o app exibe o item como checked",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaSteps.oAppExibeOItemComoChecked()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "criar lista",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu cliquei em adicionar lista",
  "keyword": "Dado "
});
formatter.match({
  "location": "ListaSteps.queEuCliqueiEmAdicionarLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu selecionar a opca checklist",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaSteps.euSelecionarAOpcaChecklist()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar e salvar o titulo",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.informarESalvarOTitulo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu adicionar tres itens a lista",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.euAdicionarTresItensALista()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "escolher categoria da lista",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@lista"
    },
    {
      "name": "@EscolherCategoria"
    }
  ]
});
formatter.step({
  "name": "eu clicar sobre a categoria",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaSteps.euClicarSobreACategoria()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o nome da categoria",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.informarONomeDaCategoria()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em sobre a categoria criada",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.clicarEmSobreACategoriaCriada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o app exibe a categoria da lista",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaSteps.oAppExibeACategoriaDaLista()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "criar lista",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu cliquei em adicionar lista",
  "keyword": "Dado "
});
formatter.match({
  "location": "ListaSteps.queEuCliqueiEmAdicionarLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu selecionar a opca checklist",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaSteps.euSelecionarAOpcaChecklist()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar e salvar o titulo",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.informarESalvarOTitulo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu adicionar tres itens a lista",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.euAdicionarTresItensALista()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "editar titulo",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@lista"
    },
    {
      "name": "@EditarTitulo"
    }
  ]
});
formatter.step({
  "name": "eu clicar em editar",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaSteps.euClicarEmEditar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu editar e salvar o titulo da lista",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.euEditarESalvarOTituloDaLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o app exibe a lista com o titulo editado",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaSteps.oAppExibeAListaComOTituloEditado()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "criar lista",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu cliquei em adicionar lista",
  "keyword": "Dado "
});
formatter.match({
  "location": "ListaSteps.queEuCliqueiEmAdicionarLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu selecionar a opca checklist",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaSteps.euSelecionarAOpcaChecklist()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar e salvar o titulo",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.informarESalvarOTitulo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu adicionar tres itens a lista",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.euAdicionarTresItensALista()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "excluir item",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@lista"
    },
    {
      "name": "@ExcluirItem"
    }
  ]
});
formatter.step({
  "name": "eu arrastar um item pra direita",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaSteps.euArrastarUmItemPraDireita()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o app exibe apenas dois itens",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaSteps.oAppExibeApenasDoisItens()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "criar lista",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu cliquei em adicionar lista",
  "keyword": "Dado "
});
formatter.match({
  "location": "ListaSteps.queEuCliqueiEmAdicionarLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu selecionar a opca checklist",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaSteps.euSelecionarAOpcaChecklist()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar e salvar o titulo",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.informarESalvarOTitulo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu adicionar tres itens a lista",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.euAdicionarTresItensALista()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "adicionar senha a lista",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@lista"
    },
    {
      "name": "@ColocarSenha"
    }
  ]
});
formatter.step({
  "name": "tocar em adicionar senha",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaSteps.tocarEmAdicionarSenha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu adicionar e confirmar a senha",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.euAdicionarEConfirmarASenha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o app exibe a nota com a senha habilitada",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaSteps.oAppExibeANotaComASenhaHabilitada()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "criar lista",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu cliquei em adicionar lista",
  "keyword": "Dado "
});
formatter.match({
  "location": "ListaSteps.queEuCliqueiEmAdicionarLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu selecionar a opca checklist",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaSteps.euSelecionarAOpcaChecklist()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar e salvar o titulo",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.informarESalvarOTitulo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu adicionar tres itens a lista",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.euAdicionarTresItensALista()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "excluir lista",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@lista"
    },
    {
      "name": "@ExcluirLista"
    }
  ]
});
formatter.step({
  "name": "eu tocar em excluir",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaSteps.euTocarEmExcluir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu confirmar a exclusao",
  "keyword": "E "
});
formatter.match({
  "location": "ListaSteps.euConfirmarAExclusao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o app exibe a tela inicial vazia",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaSteps.oAppExibeATelaInicialVazia()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: The element \u0027By.id: notizen.basic.notes.notas.note.notepad:id/recyclerView\u0027 does not exist in DOM anymore\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027STFSAOC048150-L\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: io.appium.java_client.AppiumDriver\nCapabilities {appActivity: notizen.basic.notes.notas.n..., appPackage: notizen.basic.notes.notas.n..., autoGrantPermissions: true, automationName: uiautomator2, databaseEnabled: false, desired: {appActivity: notizen.basic.notes.notas.n..., appPackage: notizen.basic.notes.notas.n..., autoGrantPermissions: true, automationName: uiautomator2, deviceName: emulator-5554, platformName: android}, deviceApiLevel: 24, deviceManufacturer: Google, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 7.0, statBarHeight: 63, takesScreenshot: true, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 3ef9eb97-dab6-4016-b1c5-8a1a89ab64d1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat stepsDefinitions.ListaSteps.oAppExibeATelaInicialVazia(ListaSteps.java:126)\r\n\tat ✽.o app exibe a tela inicial vazia(file:src/test/resources/features/Lista.feature:53)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded9.png", null);
formatter.after({
  "status": "passed"
});
});