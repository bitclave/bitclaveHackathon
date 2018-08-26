/**
 * Sample transaction processor function.
 * @param {org.example.mynetwork.CreateNewForm} tx The sample transaction instance.
 * @transaction
 */
async function sampleTransaction(tx) {  // eslint-disable-line no-unused-vars
    const formSchemaAssetRegistry = await getAssetRegistry('org.example.mynetwork.FormSchema');
    var factory = getFactory();
    // Create the vehicle.
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
  	await questionAssetRegistry.add(question4)
  	await questionAssetRegistry.add(question2)
  	await questionAssetRegistry.add(question3)

	formSchema.questions= []
  	formSchema.questions.push(question1);
  	formSchema.questions.push(question2);
  	formSchema.questions.push(question3);
  	formSchema.questions.push(question4);
  
  	formSchema.company = tx.company
    await formSchemaAssetRegistry.add(formSchema);
}