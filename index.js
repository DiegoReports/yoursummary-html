
const getChatResponse = async() =>{
  const API_URL="https://api.openai.com/v1/chat/completions"
  const API_KEY="chaveAPIAqui"

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "davinci-002",
      prompt: "Hello!",
      max_tokens: 2048,
      temperature: 0.2,
      n: 1,
      stop: null
    })
  }
  
  try {
    const response = await (await fetch(API_URL,requestOptions)).json();
    console.log(response)
  } catch (error) {
    console.log(error)
  }

}