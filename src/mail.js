export default function mail(name, email, message) {
    return new Promise(async (resolve, reject) => {
        let data
        try {
            const res = await fetch(`./mail?name=${name}&email=${email}&message=${message}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "GET",
            }) 
            data = res.json(0)
        } catch (err) {
            reject(err)
        } finally {
            resolve(data)
        }
    })
}