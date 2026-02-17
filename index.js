import { Agent ,run } from '@openai/agents';
import 'dotenv/config';
const helloAgent=new Agent({
    name:"Hello Agent",
    instructions:"You are a agent who will give answer to basic general knowledge question.with the name of user in polite way",
});

run(helloAgent ,"Hey There harsh here can you tell who won t20 worldcup in 2024 and who was  the winning captain?").then((result)=>{
    console.log(result.finalOutput)
});