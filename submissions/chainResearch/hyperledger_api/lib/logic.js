/**
 * Sample transaction processor function.
 * @param {org.example.mynetwork.SubmitForm} tx The sample transaction instance.
 * @transaction
 */
async function submitForm(tx) {  // eslint-disable-line no-unused-vars
    const formResponseAssetRegistry = await getAssetRegistry('org.example.mynetwork.FormResponse');
    var factory = getFactory();
  
  	var respid = "" + Math.ceil((Math.random()*1000));
    var formResponse = factory.newResource('org.example.mynetwork', 'FormResponse', respid);
	formResponse.respid = respid;
	formResponse.formSchema = tx.formSchema;
  	formResponse.user = tx.user
  
	const answerAssetRegistry = await getAssetRegistry('org.example.mynetwork.Answer')
    
    var answer1 = factory.newResource('org.example.mynetwork', 'Answer', respid + Math.ceil((Math.random()*1000)));
  	answer1.answer = tx.answer1
    var answer2 = factory.newResource('org.example.mynetwork', 'Answer', respid + Math.ceil((Math.random()*1000)));
  	answer2.answer = tx.answer2
    var answer3 = factory.newResource('org.example.mynetwork', 'Answer', respid + Math.ceil((Math.random()*1000)));
  	answer3.answer = tx.answer3
    var answer4 = factory.newResource('org.example.mynetwork', 'Answer', respid + Math.ceil((Math.random()*1000)));
  	answer4.answer = tx.answer4
  
  	await answerAssetRegistry.add(answer1)
  	await answerAssetRegistry.add(answer2)
  	await answerAssetRegistry.add(answer3)
  	await answerAssetRegistry.add(answer4)

  
	formResponse.answers= []
  	formResponse.answers.push(answer1);
  	formResponse.answers.push(answer2);
  	formResponse.answers.push(answer3);
  	formResponse.answers.push(answer4);

    await formResponseAssetRegistry.add(formResponse);
}

/**
 * Sample transaction processor function.
 * @param {org.example.mynetwork.CreateNewForm} tx The sample transaction instance.
 * @transaction
 */
async function createNewForm(tx) {  // eslint-disable-line no-unused-vars
    const formSchemaAssetRegistry = await getAssetRegistry('org.example.mynetwork.FormSchema');
    var factory = getFactory();
  	var formId = "" + Math.ceil((Math.random()*1000));
    var formSchema = factory.newResource('org.example.mynetwork', 'FormSchema', formId);
	formSchema.formid = formId

	const questionAssetRegistry = await getAssetRegistry('org.example.mynetwork.Question')
    var question1 = factory.newResource('org.example.mynetwork', 'Question', formId + "" + Math.ceil((Math.random()*1000)));
	question1.question = tx.field1;
	var question2 = factory.newResource('org.example.mynetwork', 'Question', formId + "" + Math.ceil((Math.random()*1000)));
	question2.question = tx.field2;
    var question3 = factory.newResource('org.example.mynetwork', 'Question', formId + "" + Math.ceil((Math.random()*1000)));
	question3.question = tx.field3;
    var question4 = factory.newResource('org.example.mynetwork', 'Question', formId + "" + Math.ceil((Math.random()*1000)));
	question4.question = tx.field4;
  	await questionAssetRegistry.add(question1)
  	await questionAssetRegistry.add(question2)
  	await questionAssetRegistry.add(question3)
  	await questionAssetRegistry.add(question4)

	formSchema.questions= []
  	formSchema.questions.push(question1);
  	formSchema.questions.push(question2);
  	formSchema.questions.push(question3);
  	formSchema.questions.push(question4);
  
  	formSchema.company = tx.company
    await formSchemaAssetRegistry.add(formSchema);
}