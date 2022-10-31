import Head from 'next/head'
import Image from 'next/image'


export default function User({user}) {

  return (
    <div>
      <Head>
        <title>User page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="title" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div>
          <div key={user.id}>
                <div style={{display:'flex' , padding:'20px' , justifyContent:'center' , text:'center'}}>
                  <div>
                      <Image
                          src={user.avatar}
                          alt={`"Picture of the ${user.first_name}`}
                          width={500}
                          height={500}
                      />
                      <div>
                          {user.first_name}
                          {user.last_name}
                      </div>
                  </div>
                </div>
          </div>
      </div>
    
    </div>
  )
}



export async function getServerSideProps(context) {
  let id = context.query.id
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const user = await res.json()
  
  if (!user) {
    return {
      notFound: true,
    }
  }

  return {
    props: { user: user.data }, // will be passed to the page component as props
  }
}