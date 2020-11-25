# Jr Front End Challenge

## Introducción

El objetivo del siguiente desafío es conocer al candidato mediante su código.
Para desarrollar el desafio, el candidato tendra 5 días desde que se le entrega el material.

## Objetivo

El candidato debera ***recrear*** un **modulo** de uno de los productos de ***N5***.
El modulo seleccionado para este desafio es el "Top 10".
Para su creacion se debera crear la ***llamada a los servicios*** en busca de la información, ***almacenarla*** dentro de un ***Store*** (Mobx o Redux), y hacer display de la misma siguiendo el diseño   que se puede ver en la imagen debajo.

![Jr%20Front%20End%20Challenge%2033007c14776440eba820e78a0160dacc/Screen_Shot_2020-11-19_at_21.03.20.png](Jr%20Front%20End%20Challenge%2033007c14776440eba820e78a0160dacc/Screen_Shot_2020-11-19_at_21.03.20.png)

## Definiciones

El componente propuesto arriba se compone de 2 secciones: ***Categorias*** y ***Top10.***
Se le proveera al candidato la documentacion de la API a la que debe apuntar para obtener esta informacion.
Para este caso se invocara a un endpoint por cada una de las secciones.

## Documentacion

### API

- Categories

    ### Request

    **GET** [https://**private-bf0ebc-n5101.apiary-mock.com**/api/spa/categories](https://private-bf0ebc-n5101.apiary-mock.com/api/spa/categories)

    ### **Response**

    **200**

    **HEADERS**

    - Content-Type:application/json

    **BODY**

    ```json
    {
      "data": [
        {
          "id": 1,
          "name": "Comercial",
          "color": "#954bb2",
          "isNotification": false,
          "ctasCount": 10,
          "type": "Category"
        },
        {
          "id": 2,
          "name": "Administrativo",
          "color": "#3dacff",
          "isNotification": false,
          "ctasCount": 10,
          "type": "Category"
        },
        {
          "id": 3,
          "name": "Riesgos",
          "color": "#7a84d0",
          "isNotification": false,
          "ctasCount": 10,
          "type": "Category"
        },
        {
          "id": 0,
          "name": "Propios",
          "color": "#21a2b5",
          "isNotification": false,
          "ctasCount": 10,
          "type": "Campaign"
        },
        {
          "id": 5,
          "name": "Servicios",
          "color": "#bb6e54",
          "isNotification": false,
          "ctasCount": 10,
          "type": "Category"
        },
        {
          "id": 0,
          "name": "Notificaciones",
          "color": "#ec6c1f",
          "isNotification": true,
          "ctasCount": 10,
          "type": "Notification"
        }
      ],
      "metadata": ""
    }
    ```

- Top 10

    ### Request

    **GET** [https://**private-bf0ebc-n5101.apiary-mock.com**/api/ctas/top10](https://private-bf0ebc-n5101.apiary-mock.com/api/ctas/top10)

    ### **Response**

    **200**

    **HEADERS**

    - Content-Type:application/json

    **BODY**

    ```json
    {
      "data": [
        {
          "id": 34,
          "title": "Inversiones",
          "groupDescription": "Ofrecer inversiones",
          "user": null,
          "categoryId": 1,
          "customerId": "e7003c2c-9b47-48d5-9ff4-015479901243",
          "customerName": "Nicolas",
          "customerLastName": "Teslas",
          "customerTotalCtaCount": 2,
          "comments": null,
          "completed": false,
          "creationDate": "2018-01-09T10:24:10.296291",
          "creationDateEpoch": 1515504250,
          "expirationDate": "2018-01-16T10:24:10.296627",
          "expirationDateEpoch": 1516109050,
          "callToActionDefinitionId": 1,
          "duration": 0,
          "order": 0,
          "answerTree": null,
          "filters": null,
          "customerRank": 99.99750006249843,
          "currentRank": 62.49937501562461
        },
        {
          "id": 37,
          "title": "Inversiones",
          "groupDescription": "Ofrecer inversiones",
          "user": null,
          "categoryId": 2,
          "customerId": "e7003c2c-9b47-48d5-9ff4-015479901240",
          "customerName": "Joaquin",
          "customerLastName": "Yepes",
          "customerTotalCtaCount": 1,
          "comments": null,
          "completed": false,
          "creationDate": "2018-01-09T10:24:10.638776",
          "creationDateEpoch": 1515504250,
          "expirationDate": "2018-01-16T10:24:10.638777",
          "expirationDateEpoch": 1516109050,
          "callToActionDefinitionId": 1,
          "duration": 0,
          "order": 0,
          "answerTree": null,
          "filters": null,
          "customerRank": 99.99305603777515,
          "currentRank": 62.49826400944379
        },
        {
          "id": 38,
          "title": "Inversiones",
          "groupDescription": "Ofrecer inversiones",
          "user": null,
          "categoryId": 3,
          "customerId": "e7003c2c-9b47-48d5-9ff4-015479901239",
          "customerName": "Sebastian",
          "customerLastName": "Villalba",
          "customerTotalCtaCount": 2,
          "comments": null,
          "completed": false,
          "creationDate": "2018-01-09T10:24:10.681056",
          "creationDateEpoch": 1515504250,
          "expirationDate": "2018-01-16T10:24:10.681058",
          "expirationDateEpoch": 1516109050,
          "callToActionDefinitionId": 1,
          "duration": 0,
          "order": 0,
          "answerTree": null,
          "filters": null,
          "customerRank": 99.96001599360255,
          "currentRank": 62.49000399840064
        },
        {
          "id": 41,
          "title": "Inversiones",
          "groupDescription": "Ofrecer inversiones",
          "user": null,
          "categoryId": 3,
          "customerId": "e7003c2c-9b47-48d5-9ff4-015479901236",
          "customerName": "Coco",
          "customerLastName": "Salla",
          "customerTotalCtaCount": 5,
          "comments": null,
          "completed": false,
          "creationDate": "2018-01-09T10:24:11.781971",
          "creationDateEpoch": 1515504251,
          "expirationDate": "2018-01-16T10:24:11.781972",
          "expirationDateEpoch": 1516109051,
          "callToActionDefinitionId": 1,
          "duration": 0,
          "order": 0,
          "answerTree": null,
          "filters": null,
          "customerRank": 99.75062344139651,
          "currentRank": 62.437655860349125
        },
        {
          "id": 39,
          "title": "Inversiones",
          "groupDescription": "Ofrecer inversiones",
          "user": null,
          "categoryId": 5,
          "customerId": "e7003c2c-9b47-48d5-9ff4-015479901238",
          "customerName": "Nicolas",
          "customerLastName": "Garcia",
          "customerTotalCtaCount": 1,
          "comments": null,
          "completed": false,
          "creationDate": "2018-01-09T10:24:11.146579",
          "creationDateEpoch": 1515504251,
          "expirationDate": "2018-01-16T10:24:11.146581",
          "expirationDateEpoch": 1516109051,
          "callToActionDefinitionId": 1,
          "duration": 0,
          "order": 0,
          "answerTree": null,
          "filters": null,
          "customerRank": 99.3103448275862,
          "currentRank": 62.327586206896555
        },
        {
          "id": 43,
          "title": "Inversiones",
          "groupDescription": "Ofrecer inversiones",
          "user": null,
          "categoryId": 5,
          "customerId": "e7003c2c-9b47-48d5-9ff4-015479901234",
          "customerName": "Sandro",
          "customerLastName": "Argento",
          "customerTotalCtaCount": 3,
          "comments": null,
          "completed": false,
          "creationDate": "2018-01-09T10:24:13.66556",
          "creationDateEpoch": 1515504253,
          "expirationDate": "2018-01-16T10:24:13.665562",
          "expirationDateEpoch": 1516109053,
          "callToActionDefinitionId": 1,
          "duration": 0,
          "order": 0,
          "answerTree": null,
          "filters": null,
          "customerRank": 99.3103448275862,
          "currentRank": 62.327586206896555
        },
        {
          "id": 35,
          "title": "Inversiones",
          "groupDescription": "Ofrecer inversiones",
          "user": null,
          "categoryId": 1,
          "customerId": "e7003c2c-9b47-48d5-9ff4-015479901242",
          "customerName": "Guido",
          "customerLastName": "Repe",
          "customerTotalCtaCount": 1,
          "comments": null,
          "completed": false,
          "creationDate": "2018-01-09T10:24:10.553671",
          "creationDateEpoch": 1515504250,
          "expirationDate": "2018-01-16T10:24:10.553673",
          "expirationDateEpoch": 1516109050,
          "callToActionDefinitionId": 1,
          "duration": 0,
          "order": 0,
          "answerTree": null,
          "filters": null,
          "customerRank": 99.00990099009901,
          "currentRank": 62.25247524752476
        },
        {
          "id": 40,
          "title": "Inversiones",
          "groupDescription": "Ofrecer inversiones",
          "user": null,
          "categoryId": 2,
          "customerId": "e7003c2c-9b47-48d5-9ff4-015479901237",
          "customerName": "Miguel",
          "customerLastName": "Sedel",
          "customerTotalCtaCount": 4,
          "comments": null,
          "completed": false,
          "creationDate": "2018-01-09T10:24:11.192943",
          "creationDateEpoch": 1515504251,
          "expirationDate": "2018-01-16T10:24:11.192945",
          "expirationDateEpoch": 1516109051,
          "callToActionDefinitionId": 1,
          "duration": 0,
          "order": 0,
          "answerTree": null,
          "filters": null,
          "customerRank": 98.78048780487805,
          "currentRank": 62.19512195121951
        },
        {
          "id": 36,
          "title": "Inversiones",
          "groupDescription": "Ofrecer inversiones",
          "user": null,
          "categoryId": 3,
          "customerId": "e7003c2c-9b47-48d5-9ff4-015479901241",
          "customerName": "Fernando",
          "customerLastName": "Mirasdo",
          "customerTotalCtaCount": 2,
          "comments": null,
          "completed": false,
          "creationDate": "2018-01-09T10:24:10.592923",
          "creationDateEpoch": 1515504250,
          "expirationDate": "2018-01-16T10:24:10.592925",
          "expirationDateEpoch": 1516109050,
          "callToActionDefinitionId": 1,
          "duration": 0,
          "order": 0,
          "answerTree": null,
          "filters": null,
          "customerRank": 80.1591238269082,
          "currentRank": 57.53978095672705
        },
        {
          "id": 44,
          "title": "Inversiones",
          "groupDescription": "Ofrecer inversiones",
          "user": null,
          "categoryId": 3,
          "customerId": "e7003c2c-9b47-48d5-9ff4-015479905000",
          "customerName": "Pepe",
          "customerLastName": "Argento",
          "customerTotalCtaCount": 2,
          "comments": null,
          "completed": false,
          "creationDate": "2018-01-09T10:24:14.656363",
          "creationDateEpoch": 1515504254,
          "expirationDate": "2018-01-16T10:24:14.656365",
          "expirationDateEpoch": 1516109054,
          "callToActionDefinitionId": 1,
          "duration": 0,
          "order": 0,
          "answerTree": null,
          "filters": null,
          "customerRank": 80,
          "currentRank": 57.5
        }
      ],
      "metadata": ""
    }
    ```

### Librerias

[Redux - A predictable state container for JavaScript apps. | Redux](https://redux.js.org/)

[Material-UI: A popular React UI framework](http://material-ui.com)

[axios/axios](https://github.com/axios/axios)

[Storybook: UI component explorer for frontend developers](https://storybook.js.org/)

## Objetivos Técnicos

- Componentes

    Para los ***componentes visuales*** el candidato deberá utilizar los provistos por la libreria ***[Material-UI](http://material-ui.com).***
    El proyecto ya tendra instalado el ***Theme*** customizado de ***N5*** para facilitar las semejanzas con el diseño propuesto. ******

- Practicas

    Es de gran valor ver uso de buenas practicas y ultimas metodologias en el codigo entregado.
    Se valorará el uso de ***functional components, Hooks*** y otras practicas.

- Servicios

    Para las ***llamadas a la API*** el candidato debera utilizar la libreria [Axios](https://github.com/axios/axios).
    Es considerado buena practica dentro de N5 mantener los servicios separados de los componentes y los store.

- Store

    Para el ***almacenamiento de la informacion*** obtenida de los servicios, el candidato debera crear un ***Store global*** capaz de manejar y compartir la información entre todos los componentes del entregable. 

## Template

El candidato ***partirá de un template*** que le facilitara la creación del proyecto, la instalacion de librerias y el display del componente a recrear.
El template esta construído con ***React, Babel y Storybook.***

[]()

## Entregable

El candidato debera entregar el proyecto desde un ***repositorio publico de su creación*** partiendo desde el template.
Se evaluara mas alla del ***codigo y la funcionalidad***, el orden en el ***versionado del repositorio,*** el ***estilo del codigo*** y la utilizacion de ***últimas tecnologías y practicas***.