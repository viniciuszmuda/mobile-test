$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Aluno.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Cadastro de Aluno",
  "description": "",
  "id": "cadastro-de-aluno",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@aluno"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Cadastro de Aluno",
  "description": "",
  "id": "cadastro-de-aluno;cadastro-de-aluno",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@FB"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que efetuei login com dados validos",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "estou na tela de cadastro de aluno",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "efetuo cadastro de aluno com os campos:",
  "rows": [
    {
      "cells": [
        "codigo",
        "\u003ccodigo\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "nome",
        "\u003cnome\u003e"
      ],
      "line": 11
    }
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clico em gravar aluno",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "o sistema processa o cadastro do aluno:",
  "rows": [
    {
      "cells": [
        "sucesso",
        "\u003csucesso\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "codigo",
        "\u003ccodigo\u003e"
      ],
      "line": 15
    },
    {
      "cells": [
        "nome",
        "\u003cnome\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "mensagemErro",
        "\u003cmensagemErro\u003e"
      ],
      "line": 17
    }
  ],
  "keyword": "Entao "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "cadastro-de-aluno;cadastro-de-aluno;",
  "rows": [
    {
      "cells": [
        "codigo",
        "nome",
        "sucesso",
        "mensagemErro"
      ],
      "line": 20,
      "id": "cadastro-de-aluno;cadastro-de-aluno;;1"
    },
    {
      "cells": [
        "12",
        "Teste de cadastro",
        "true",
        ""
      ],
      "line": 21,
      "id": "cadastro-de-aluno;cadastro-de-aluno;;2"
    },
    {
      "cells": [
        "",
        "Teste de cadastro",
        "false",
        "Os campos devem ser preenchidos!"
      ],
      "line": 22,
      "id": "cadastro-de-aluno;cadastro-de-aluno;;3"
    },
    {
      "cells": [
        "12",
        "",
        "false",
        "Os campos devem ser preenchidos!"
      ],
      "line": 23,
      "id": "cadastro-de-aluno;cadastro-de-aluno;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 26623026350,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Cadastro de Aluno",
  "description": "",
  "id": "cadastro-de-aluno;cadastro-de-aluno;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@aluno"
    },
    {
      "line": 5,
      "name": "@FB"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que efetuei login com dados validos",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "estou na tela de cadastro de aluno",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "efetuo cadastro de aluno com os campos:",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "codigo",
        "12"
      ],
      "line": 10
    },
    {
      "cells": [
        "nome",
        "Teste de cadastro"
      ],
      "line": 11
    }
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clico em gravar aluno",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "o sistema processa o cadastro do aluno:",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "sucesso",
        "true"
      ],
      "line": 14
    },
    {
      "cells": [
        "codigo",
        "12"
      ],
      "line": 15
    },
    {
      "cells": [
        "nome",
        "Teste de cadastro"
      ],
      "line": 16
    },
    {
      "cells": [
        "mensagemErro",
        ""
      ],
      "line": 17
    }
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginStep.que_efetuei_login_com_dados_validos()"
});
formatter.result({
  "duration": 10703978157,
  "error_message": "org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.xpath: //android.widget.EditText[@content-desc\u003d\u0027email\u0027]})\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.sendKeys(\u003cgenerated\u003e)\n\tat page.LoginPage.setUserField(LoginPage.java:31)\n\tat stepdef.LoginStep.que_efetuei_login_com_dados_validos(LoginStep.java:21)\n\tat ✽.Dado que efetuei login com dados validos(features/Aluno.feature:7)\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@345e5a17 (tried for 1 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:303)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.sendKeys(\u003cgenerated\u003e)\n\tat page.LoginPage.setUserField(LoginPage.java:31)\n\tat stepdef.LoginStep.que_efetuei_login_com_dados_validos(LoginStep.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.runtime.Runtime.run(Runtime.java:122)\n\tat cucumber.api.cli.Main.run(Main.java:36)\n\tat cucumber.api.cli.Main.main(Main.java:18)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.xpath: //android.widget.EditText[@content-desc\u003d\u0027email\u0027]})\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027zmuda-5480\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.0.0-32-generic\u0027, java.version: \u00271.8.0_212\u0027\nDriver info: driver.version: AndroidDriver\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\n\t... 24 more\n",
  "status": "failed"
});
formatter.match({
  "location": "AlunoStep.estou_na_tela_de_cadastro_de_aluno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.efetuo_cadastro_de_aluno_com_os_campos(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.clico_em_gravar_aluno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.o_sistema_processa_o_cadastro_do_aluno(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 533619010,
  "status": "passed"
});
formatter.before({
  "duration": 27133147502,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Cadastro de Aluno",
  "description": "",
  "id": "cadastro-de-aluno;cadastro-de-aluno;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@aluno"
    },
    {
      "line": 5,
      "name": "@FB"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que efetuei login com dados validos",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "estou na tela de cadastro de aluno",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "efetuo cadastro de aluno com os campos:",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "codigo",
        ""
      ],
      "line": 10
    },
    {
      "cells": [
        "nome",
        "Teste de cadastro"
      ],
      "line": 11
    }
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clico em gravar aluno",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "o sistema processa o cadastro do aluno:",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "sucesso",
        "false"
      ],
      "line": 14
    },
    {
      "cells": [
        "codigo",
        ""
      ],
      "line": 15
    },
    {
      "cells": [
        "nome",
        "Teste de cadastro"
      ],
      "line": 16
    },
    {
      "cells": [
        "mensagemErro",
        "Os campos devem ser preenchidos!"
      ],
      "line": 17
    }
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginStep.que_efetuei_login_com_dados_validos()"
});
formatter.result({
  "duration": 10126163710,
  "error_message": "org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.xpath: //android.widget.EditText[@content-desc\u003d\u0027email\u0027]})\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.sendKeys(\u003cgenerated\u003e)\n\tat page.LoginPage.setUserField(LoginPage.java:31)\n\tat stepdef.LoginStep.que_efetuei_login_com_dados_validos(LoginStep.java:21)\n\tat ✽.Dado que efetuei login com dados validos(features/Aluno.feature:7)\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@18388a3c (tried for 1 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:303)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.sendKeys(\u003cgenerated\u003e)\n\tat page.LoginPage.setUserField(LoginPage.java:31)\n\tat stepdef.LoginStep.que_efetuei_login_com_dados_validos(LoginStep.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.runtime.Runtime.run(Runtime.java:122)\n\tat cucumber.api.cli.Main.run(Main.java:36)\n\tat cucumber.api.cli.Main.main(Main.java:18)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.xpath: //android.widget.EditText[@content-desc\u003d\u0027email\u0027]})\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027zmuda-5480\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.0.0-32-generic\u0027, java.version: \u00271.8.0_212\u0027\nDriver info: driver.version: AndroidDriver\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\n\t... 24 more\n",
  "status": "failed"
});
formatter.match({
  "location": "AlunoStep.estou_na_tela_de_cadastro_de_aluno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.efetuo_cadastro_de_aluno_com_os_campos(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.clico_em_gravar_aluno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.o_sistema_processa_o_cadastro_do_aluno(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 478389403,
  "status": "passed"
});
formatter.before({
  "duration": 24304854019,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Cadastro de Aluno",
  "description": "",
  "id": "cadastro-de-aluno;cadastro-de-aluno;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@aluno"
    },
    {
      "line": 5,
      "name": "@FB"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que efetuei login com dados validos",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "estou na tela de cadastro de aluno",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "efetuo cadastro de aluno com os campos:",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "codigo",
        "12"
      ],
      "line": 10
    },
    {
      "cells": [
        "nome",
        ""
      ],
      "line": 11
    }
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clico em gravar aluno",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "o sistema processa o cadastro do aluno:",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "sucesso",
        "false"
      ],
      "line": 14
    },
    {
      "cells": [
        "codigo",
        "12"
      ],
      "line": 15
    },
    {
      "cells": [
        "nome",
        ""
      ],
      "line": 16
    },
    {
      "cells": [
        "mensagemErro",
        "Os campos devem ser preenchidos!"
      ],
      "line": 17
    }
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginStep.que_efetuei_login_com_dados_validos()"
});
formatter.result({
  "duration": 10269623347,
  "error_message": "org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.xpath: //android.widget.EditText[@content-desc\u003d\u0027email\u0027]})\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.sendKeys(\u003cgenerated\u003e)\n\tat page.LoginPage.setUserField(LoginPage.java:31)\n\tat stepdef.LoginStep.que_efetuei_login_com_dados_validos(LoginStep.java:21)\n\tat ✽.Dado que efetuei login com dados validos(features/Aluno.feature:7)\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@7d755813 (tried for 1 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:303)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.sendKeys(\u003cgenerated\u003e)\n\tat page.LoginPage.setUserField(LoginPage.java:31)\n\tat stepdef.LoginStep.que_efetuei_login_com_dados_validos(LoginStep.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.runtime.Runtime.run(Runtime.java:122)\n\tat cucumber.api.cli.Main.run(Main.java:36)\n\tat cucumber.api.cli.Main.main(Main.java:18)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.xpath: //android.widget.EditText[@content-desc\u003d\u0027email\u0027]})\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027zmuda-5480\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.0.0-32-generic\u0027, java.version: \u00271.8.0_212\u0027\nDriver info: driver.version: AndroidDriver\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\n\t... 24 more\n",
  "status": "failed"
});
formatter.match({
  "location": "AlunoStep.estou_na_tela_de_cadastro_de_aluno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.efetuo_cadastro_de_aluno_com_os_campos(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.clico_em_gravar_aluno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.o_sistema_processa_o_cadastro_do_aluno(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 564083807,
  "status": "passed"
});
formatter.uri("features/Bug.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Cadastro de Aluno",
  "description": "",
  "id": "cadastro-de-aluno",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@aluno"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Cadastro de Aluno - Bug",
  "description": "",
  "id": "cadastro-de-aluno;cadastro-de-aluno---bug",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@FE"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que efetuei login com dados validos",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "estou na tela de cadastro de aluno",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "efetuo cadastro de aluno com os campos:",
  "rows": [
    {
      "cells": [
        "codigo",
        "\u003ccodigo\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "nome",
        "\u003cnome\u003e"
      ],
      "line": 11
    }
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "altero os valores do cadastro do aluno:",
  "rows": [
    {
      "cells": [
        "codigo",
        "\u003ccodigoAlterado\u003e"
      ],
      "line": 13
    },
    {
      "cells": [
        "nome",
        "\u003cnomeAlterado\u003e"
      ],
      "line": 14
    }
  ],
  "keyword": "Mas "
});
formatter.step({
  "line": 15,
  "name": "clico em gravar aluno",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "o sistema processa o cadastro do aluno:",
  "rows": [
    {
      "cells": [
        "sucesso",
        "\u003csucesso\u003e"
      ],
      "line": 17
    },
    {
      "cells": [
        "codigo",
        "\u003ccodigo\u003e"
      ],
      "line": 18
    },
    {
      "cells": [
        "nome",
        "\u003cnome\u003e"
      ],
      "line": 19
    },
    {
      "cells": [
        "mensagemErro",
        "\u003cmensagemErro\u003e"
      ],
      "line": 20
    }
  ],
  "keyword": "Entao "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "cadastro-de-aluno;cadastro-de-aluno---bug;",
  "rows": [
    {
      "cells": [
        "codigo",
        "nome",
        "codigoAlterado",
        "nomeAlterado",
        "sucesso",
        "mensagemErro"
      ],
      "line": 23,
      "id": "cadastro-de-aluno;cadastro-de-aluno---bug;;1"
    },
    {
      "cells": [
        "12",
        "Teste de cadastro",
        "",
        "",
        "false",
        "Os campos devem ser preenchidos!"
      ],
      "line": 24,
      "id": "cadastro-de-aluno;cadastro-de-aluno---bug;;2"
    },
    {
      "cells": [
        "12",
        "Teste de cadastro",
        "12",
        "",
        "false",
        "Os campos devem ser preenchidos!"
      ],
      "line": 25,
      "id": "cadastro-de-aluno;cadastro-de-aluno---bug;;3"
    },
    {
      "cells": [
        "12",
        "Teste de cadastro",
        "",
        "Teste de cadastro",
        "false",
        "Os campos devem ser preenchidos!"
      ],
      "line": 26,
      "id": "cadastro-de-aluno;cadastro-de-aluno---bug;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 25125163660,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Cadastro de Aluno - Bug",
  "description": "",
  "id": "cadastro-de-aluno;cadastro-de-aluno---bug;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@aluno"
    },
    {
      "line": 5,
      "name": "@FE"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que efetuei login com dados validos",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "estou na tela de cadastro de aluno",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "efetuo cadastro de aluno com os campos:",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "codigo",
        "12"
      ],
      "line": 10
    },
    {
      "cells": [
        "nome",
        "Teste de cadastro"
      ],
      "line": 11
    }
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "altero os valores do cadastro do aluno:",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "codigo",
        ""
      ],
      "line": 13
    },
    {
      "cells": [
        "nome",
        ""
      ],
      "line": 14
    }
  ],
  "keyword": "Mas "
});
formatter.step({
  "line": 15,
  "name": "clico em gravar aluno",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "o sistema processa o cadastro do aluno:",
  "matchedColumns": [
    0,
    1,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "sucesso",
        "false"
      ],
      "line": 17
    },
    {
      "cells": [
        "codigo",
        "12"
      ],
      "line": 18
    },
    {
      "cells": [
        "nome",
        "Teste de cadastro"
      ],
      "line": 19
    },
    {
      "cells": [
        "mensagemErro",
        "Os campos devem ser preenchidos!"
      ],
      "line": 20
    }
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginStep.que_efetuei_login_com_dados_validos()"
});
formatter.result({
  "duration": 10699280487,
  "error_message": "org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.xpath: //android.widget.EditText[@content-desc\u003d\u0027email\u0027]})\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.sendKeys(\u003cgenerated\u003e)\n\tat page.LoginPage.setUserField(LoginPage.java:31)\n\tat stepdef.LoginStep.que_efetuei_login_com_dados_validos(LoginStep.java:21)\n\tat ✽.Dado que efetuei login com dados validos(features/Bug.feature:7)\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@55ec556 (tried for 1 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:303)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.sendKeys(\u003cgenerated\u003e)\n\tat page.LoginPage.setUserField(LoginPage.java:31)\n\tat stepdef.LoginStep.que_efetuei_login_com_dados_validos(LoginStep.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.runtime.Runtime.run(Runtime.java:122)\n\tat cucumber.api.cli.Main.run(Main.java:36)\n\tat cucumber.api.cli.Main.main(Main.java:18)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.xpath: //android.widget.EditText[@content-desc\u003d\u0027email\u0027]})\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027zmuda-5480\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.0.0-32-generic\u0027, java.version: \u00271.8.0_212\u0027\nDriver info: driver.version: AndroidDriver\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\n\t... 24 more\n",
  "status": "failed"
});
formatter.match({
  "location": "AlunoStep.estou_na_tela_de_cadastro_de_aluno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.efetuo_cadastro_de_aluno_com_os_campos(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.altero_os_valores_do_cadastro_do_aluno(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.clico_em_gravar_aluno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.o_sistema_processa_o_cadastro_do_aluno(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 533427969,
  "status": "passed"
});
formatter.before({
  "duration": 26024565345,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Cadastro de Aluno - Bug",
  "description": "",
  "id": "cadastro-de-aluno;cadastro-de-aluno---bug;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@aluno"
    },
    {
      "line": 5,
      "name": "@FE"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que efetuei login com dados validos",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "estou na tela de cadastro de aluno",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "efetuo cadastro de aluno com os campos:",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "codigo",
        "12"
      ],
      "line": 10
    },
    {
      "cells": [
        "nome",
        "Teste de cadastro"
      ],
      "line": 11
    }
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "altero os valores do cadastro do aluno:",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "codigo",
        "12"
      ],
      "line": 13
    },
    {
      "cells": [
        "nome",
        ""
      ],
      "line": 14
    }
  ],
  "keyword": "Mas "
});
formatter.step({
  "line": 15,
  "name": "clico em gravar aluno",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "o sistema processa o cadastro do aluno:",
  "matchedColumns": [
    0,
    1,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "sucesso",
        "false"
      ],
      "line": 17
    },
    {
      "cells": [
        "codigo",
        "12"
      ],
      "line": 18
    },
    {
      "cells": [
        "nome",
        "Teste de cadastro"
      ],
      "line": 19
    },
    {
      "cells": [
        "mensagemErro",
        "Os campos devem ser preenchidos!"
      ],
      "line": 20
    }
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginStep.que_efetuei_login_com_dados_validos()"
});
formatter.result({
  "duration": 10470761224,
  "error_message": "org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.xpath: //android.widget.EditText[@content-desc\u003d\u0027email\u0027]})\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.sendKeys(\u003cgenerated\u003e)\n\tat page.LoginPage.setUserField(LoginPage.java:31)\n\tat stepdef.LoginStep.que_efetuei_login_com_dados_validos(LoginStep.java:21)\n\tat ✽.Dado que efetuei login com dados validos(features/Bug.feature:7)\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@1416cf9f (tried for 1 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:303)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.sendKeys(\u003cgenerated\u003e)\n\tat page.LoginPage.setUserField(LoginPage.java:31)\n\tat stepdef.LoginStep.que_efetuei_login_com_dados_validos(LoginStep.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.runtime.Runtime.run(Runtime.java:122)\n\tat cucumber.api.cli.Main.run(Main.java:36)\n\tat cucumber.api.cli.Main.main(Main.java:18)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.xpath: //android.widget.EditText[@content-desc\u003d\u0027email\u0027]})\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027zmuda-5480\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.0.0-32-generic\u0027, java.version: \u00271.8.0_212\u0027\nDriver info: driver.version: AndroidDriver\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\n\t... 24 more\n",
  "status": "failed"
});
formatter.match({
  "location": "AlunoStep.estou_na_tela_de_cadastro_de_aluno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.efetuo_cadastro_de_aluno_com_os_campos(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.altero_os_valores_do_cadastro_do_aluno(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.clico_em_gravar_aluno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.o_sistema_processa_o_cadastro_do_aluno(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 538619444,
  "status": "passed"
});
formatter.before({
  "duration": 24830216091,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Cadastro de Aluno - Bug",
  "description": "",
  "id": "cadastro-de-aluno;cadastro-de-aluno---bug;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@aluno"
    },
    {
      "line": 5,
      "name": "@FE"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que efetuei login com dados validos",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "estou na tela de cadastro de aluno",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "efetuo cadastro de aluno com os campos:",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "codigo",
        "12"
      ],
      "line": 10
    },
    {
      "cells": [
        "nome",
        "Teste de cadastro"
      ],
      "line": 11
    }
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "altero os valores do cadastro do aluno:",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "codigo",
        ""
      ],
      "line": 13
    },
    {
      "cells": [
        "nome",
        "Teste de cadastro"
      ],
      "line": 14
    }
  ],
  "keyword": "Mas "
});
formatter.step({
  "line": 15,
  "name": "clico em gravar aluno",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "o sistema processa o cadastro do aluno:",
  "matchedColumns": [
    0,
    1,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "sucesso",
        "false"
      ],
      "line": 17
    },
    {
      "cells": [
        "codigo",
        "12"
      ],
      "line": 18
    },
    {
      "cells": [
        "nome",
        "Teste de cadastro"
      ],
      "line": 19
    },
    {
      "cells": [
        "mensagemErro",
        "Os campos devem ser preenchidos!"
      ],
      "line": 20
    }
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginStep.que_efetuei_login_com_dados_validos()"
});
formatter.result({
  "duration": 10690667687,
  "error_message": "org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.xpath: //android.widget.EditText[@content-desc\u003d\u0027email\u0027]})\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.sendKeys(\u003cgenerated\u003e)\n\tat page.LoginPage.setUserField(LoginPage.java:31)\n\tat stepdef.LoginStep.que_efetuei_login_com_dados_validos(LoginStep.java:21)\n\tat ✽.Dado que efetuei login com dados validos(features/Bug.feature:7)\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@74ecacc3 (tried for 1 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:303)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.sendKeys(\u003cgenerated\u003e)\n\tat page.LoginPage.setUserField(LoginPage.java:31)\n\tat stepdef.LoginStep.que_efetuei_login_com_dados_validos(LoginStep.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.runtime.Runtime.run(Runtime.java:122)\n\tat cucumber.api.cli.Main.run(Main.java:36)\n\tat cucumber.api.cli.Main.main(Main.java:18)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.xpath: //android.widget.EditText[@content-desc\u003d\u0027email\u0027]})\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027zmuda-5480\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.0.0-32-generic\u0027, java.version: \u00271.8.0_212\u0027\nDriver info: driver.version: AndroidDriver\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\n\t... 24 more\n",
  "status": "failed"
});
formatter.match({
  "location": "AlunoStep.estou_na_tela_de_cadastro_de_aluno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.efetuo_cadastro_de_aluno_com_os_campos(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.altero_os_valores_do_cadastro_do_aluno(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.clico_em_gravar_aluno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AlunoStep.o_sistema_processa_o_cadastro_do_aluno(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 426239520,
  "status": "passed"
});
formatter.uri("features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login",
  "description": "",
  "id": "login;login",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 6,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "preencho os campos:",
  "rows": [
    {
      "cells": [
        "email",
        "\u003cemail\u003e"
      ],
      "line": 8
    },
    {
      "cells": [
        "senha",
        "\u003csenha\u003e"
      ],
      "line": 9
    }
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "clico em entrar",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "o sistema processa o login:",
  "rows": [
    {
      "cells": [
        "sucesso",
        "\u003csucesso\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "mensagemErro",
        "\u003cmensagemErro\u003e"
      ],
      "line": 13
    }
  ],
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login;login;",
  "rows": [
    {
      "cells": [
        "email",
        "senha",
        "sucesso",
        "mensagemErro"
      ],
      "line": 16,
      "id": "login;login;;1"
    },
    {
      "cells": [
        "teste@teste.com",
        "123456",
        "true",
        ""
      ],
      "line": 17,
      "id": "login;login;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 25326042984,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login",
  "description": "",
  "id": "login;login;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "preencho os campos:",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "email",
        "teste@teste.com"
      ],
      "line": 8
    },
    {
      "cells": [
        "senha",
        "123456"
      ],
      "line": 9
    }
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "clico em entrar",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "o sistema processa o login:",
  "matchedColumns": [
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "sucesso",
        "true"
      ],
      "line": 12
    },
    {
      "cells": [
        "mensagemErro",
        ""
      ],
      "line": 13
    }
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginStep.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 10377537447,
  "error_message": "org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.xpath: //android.widget.TextView[@text\u003d\u0027Entrar\u0027]})\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.isDisplayed(\u003cgenerated\u003e)\n\tat stepdef.LoginStep.que_estou_na_tela_de_login(LoginStep.java:29)\n\tat ✽.Dado que estou na tela de login(features/Login.feature:6)\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@43c87306 (tried for 1 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:303)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.isDisplayed(\u003cgenerated\u003e)\n\tat stepdef.LoginStep.que_estou_na_tela_de_login(LoginStep.java:29)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.runtime.Runtime.run(Runtime.java:122)\n\tat cucumber.api.cli.Main.run(Main.java:36)\n\tat cucumber.api.cli.Main.main(Main.java:18)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.xpath: //android.widget.TextView[@text\u003d\u0027Entrar\u0027]})\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027zmuda-5480\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.0.0-32-generic\u0027, java.version: \u00271.8.0_212\u0027\nDriver info: driver.version: AndroidDriver\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\n\t... 23 more\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStep.preencho_os_campos(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.clico_em_entrar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.o_sistema_processa_o_login(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 450865229,
  "status": "passed"
});
});