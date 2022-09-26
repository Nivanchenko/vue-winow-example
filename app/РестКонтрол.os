#Использовать json

&Пластилин Перем ХранилищеИмен Экспорт;

&Желудь
&Прозвище("Контроллер")
&Маршрут("/api")
Процедура ПриСозданииОбъекта()
	
КонецПроцедуры

&ТочкаМаршрута("tasks")
Процедура ПолучитьИмена(Ответ) Экспорт
	УстановитьОтветИзЖСОН(Ответ, ХранилищеИмен.ПолучитьИмена());
КонецПроцедуры

&ТочкаМаршрута("tasks/add/{Имя}/{Фамилия}")
Процедура ДобавитьИмя(Имя, Фамилия, Ответ) Экспорт
	ХранилищеИмен.ДобавитьИмя(Имя, Фамилия);
	УстановитьОтветИзЖСОН(Ответ, Новый Структура("Результат", "ок"));
КонецПроцедуры

Процедура УстановитьОтветИзЖСОН(Ответ, Объект)
	Ответ.УстановитьТипКонтента("json");
	Парсер = Новый ПарсерJSON();
	Ответ.ТелоТекст = Парсер.ЗаписатьJSON(Объект);
КонецПроцедуры