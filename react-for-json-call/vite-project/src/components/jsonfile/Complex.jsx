import React, { useEffect, useState } from 'react'

const Complex = () => {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('/data/complex.json').then((res)=>{
            return res.json()
        }).then((data)=>setdata(data))


    },[])
    console.log(data)
  return (
    <div>
        <h1>sujon biswas</h1>
        {/* name data */}
        {
            data.map((item,index)=>{
                return <div key={index}>
                    <li>{item.id}</li>
                    <div>
                        <li>{item.name.first}</li>
                        <li>{item.name.middle}</li>
                        <li>{item.name.last}</li>
                        <li>{item.name.aliases.map((item,index)=>{
                            return <div key={index}>
                                <li>{item}</li>
                            </div>
                        })}</li>
                    </div>
                    <li>{item.email}</li>

                    {/* contact data */}
                    <div>
                        {item.contact.phoneNumbers.map((item,index)=>{
                            return <div key={index}>
                                <li>{item.type}</li>
                                <li>{item.number}</li>
                            </div>
                        })}
                    </div>
                    <div>
                          {item.contact.emergencyContacts.map((item,index)=>{
                            return <div key={index}>
                                <li>{item.name}</li>
                                <li>{item.relation}</li>
                                <li>{item.phone}</li>
                            </div>
                        })}
                    </div>
                    {/* address data */}
                    <div>
                         <li>{item.address.current.street}</li>
                          <li>{item.address.current.city}</li>
                           <li>{item.address.current.state}</li>
                            <li>{item.address.current.country}</li>
                            <li>{item.address.current.postalCode}</li>
                            <div>
                                <li>{item.address.current.geo.lat}</li>
                                 <li>{item.address.current.geo.lng}</li>
                            </div>
                            
                    </div>
                    {/* profession data */}
                    <div>
                            <li>{item.profession.current}</li>

                            <div>
                                {item.profession.previousRoles.map((item,index)=>{
                                    return <div key={index}>
                                        <li>{item.title}</li>
                                        <li>{item.company}</li>
                                        <li>{item.years}</li>
                                    </div>
                                })}
                            </div>
                            <div>
                                {item.profession.skills.map((item,index)=>{
                                    return <div key={index}>
                                        <li>{item.language}</li>
                                        <li>{item.level}</li>
                                        <li>{item.yearsExperience}</li>
                                    </div>
                                })}
                            </div>
                    </div>
                    {/* company data */}
                    <div>
                        <li>{item.company.name}</li>
                        <li>{item.company.position}</li>
                        <div>{item.company.projects.map((item,index)=>{
                            return <div key={index}>
                                <li>{item.name}</li>
                                <li>{item.role}</li>
                                <div>
                                    {item.technologies.map((item,index)=>{
                                        return <div key={index}>
                                            <li>{item}</li>
                                        </div>
                                    })}
                                </div>
                                <div>
                                 {item.teamMembers.map((item,index)=>(
                                    <div key={index}>
                                        <li>{item.name}</li>
                                         <li>{item.role}</li>
                                    </div>
                                 ))}
                                </div>
                                <div>
                                    {item.durationMonths}
                                </div>
                            </div>
                        })}</div>
                        {/* wears data */}
                        <div>
                              {item.wears.map((item,index)=>{
                                return <div key={index}>
                                    <li>{item.type}</li>
                                    <li>{item.brand}</li>
                                    <li>{item.color}</li>
                                    <li>{item.size}</li>
                                    <li>{item.material}</li>
                                    <li>{item.occasions.map((item,index)=>{
                                        return <div key={index}>
                                            <li>{item}</li>
                                        </div>
                                    })}</li>
                                    <li>{item.inventory.purchasedFrom}</li>
                                       <li>{item.inventory.purchaseDate}</li>
                                       <li>{item.inventory.wornCount}</li>
                                       <li>{item.inventory.lastWorn}</li>
                                       
                                </div>
                              })}
                        </div>


                        {/* social data */}

                        <div>
                            {item.socialProfiles.map((item,index)=>{
                                return <div key={index}>
                                    <li>{item.platform}</li>
                                    <li>{item.url}</li>
                                </div>
                            })}
                        </div>
                        {/* meta data */}
                        <div>
                           <li>{item.meta.createdAt}</li>
                           <li>{item.meta.updatedAt}</li>
                           <li>{item.meta.status}</li>
                           <div>
                            {item.meta.tags.map((item,index)=>{
                                return <div key={index}>
                                    <li>{item}</li>
                                </div>
                            })}
                           </div>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
  )
}

export default Complex