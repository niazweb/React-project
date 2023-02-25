import './Service.css'
import ServiceItem from './ServiceItem';
function Service(){

  let services=[
    {
    serviceIcon :'bi bi-briefcase',
    serviceTitle :'WEB DESIGN',
    serviceInfo :'lorem ipsum dolor bjdhu yyguhidw uyhwd uiujfwy ufyfh  iufeiu ufiysd  uf9eu9e ue9s fdiui usd9f hhhhh dhfushfb vhdbvhkd skdhbfshkn',
  
    },

    {
      serviceIcon :'bi bi-card-checklist',
      serviceTitle :'WEB DEVELOPMENT',
      serviceInfo :'lorem ipsum dolor bjdhu yyguhidw uyhwd uiujfwy ufyfh  iufeiu ufiysd  uf9eu9e ue9s fdiui usd9f hhhhh dhfushfb vhdbvhkd skdhbfshkn',
    
      },

      {
        serviceIcon :'bi bi-bar-chart',
        serviceTitle :'PHOTOGRAPHY',
        serviceInfo :'lorem ipsum dolor bjdhu yyguhidw uyhwd uiujfwy ufyfh  iufeiu ufiysd  uf9eu9e ue9s fdiui usd9f hhhhh dhfushfb vhdbvhkd skdhbfshkn',
      
        },

        {
          serviceIcon :'bi bi-binoculars',
          serviceTitle :'RESPONSIVE DESIGN',
          serviceInfo :'lorem ipsum dolor bjdhu yyguhidw uyhwd uiujfwy ufyfh  iufeiu ufiysd  uf9eu9e ue9s fdiui usd9f hhhhh dhfushfb vhdbvhkd skdhbfshkn',
        
          },

          {
            serviceIcon :'bi bi-brightness-high',
            serviceTitle :'GRAPHIC DESIGN',
            serviceInfo :'lorem ipsum dolor bjdhu yyguhidw uyhwd uiujfwy ufyfh  iufeiu ufiysd  uf9eu9e ue9s fdiui usd9f hhhhh dhfushfb vhdbvhkd skdhbfshkn',
          
            },

            {
              serviceIcon :'bi bi-calendar4-week',
              serviceTitle :'MARKETING SERVICES',
              serviceInfo :'lorem ipsum dolor bjdhu yyguhidw uyhwd uiujfwy ufyfh  iufeiu ufiysd  uf9eu9e ue9s fdiui usd9f hhhhh dhfushfb vhdbvhkd skdhbfshkn',
            
              },

        

  ]
    return(

        <section id="services">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">SERVICES</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          <ServiceItem {...services[0]}/>
          <ServiceItem {...services[1]}/>
          <ServiceItem {...services[2]}/>
          <ServiceItem {...services[3]}/>
          <ServiceItem {...services[4]}/>
          <ServiceItem {...services[5]}/>
        </div>
      </div>
    </section>

    )
}


export default Service;