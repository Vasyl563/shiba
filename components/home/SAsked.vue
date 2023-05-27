<template>
  <div
    id="FAQ"
    class="bg-blue-800 pt-[4.3rem] pb-[9.3rem] max-[360px]:px-4 "
  >
    <div>
      <h1 class="font-bold text-5xl text-center pb-12 text-white max-[360px]:text-4xl">
        Frequently Asked Questions
      </h1>
    </div>
    <div className="faqs ">
      <FAQ
        v-for="(faq, i) in faqs"
        :key="i"
        class="bg-blue-900"
        :faq="faq"
        :index="i"
        :open="faq.open"
        @toggleOpen="toggleOpen"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      faqs: [
        {
          question: "Where can I buy tokens and NFTs of SpiderShib Inu?",
          answer: "I'm not sure but we love him 3000",
          open: false
        },
        {
          question: "Where can I buy tokens and NFTs of SpiderShib Inu?",
          answer: "Mastered Ultra Instinct",
          open: false
        },
        {
          question: "Where can I buy tokens and NFTs of SpiderShib Inu?",
          answer: "YES",
          open: false
        },
        {
          question: "Where can I buy tokens and NFTs of SpiderShib Inu?",
          answer: "YES",
          open: false
        }
      ]
    }
  },
  methods: {
    toggleOpen: function (index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      });
    }
  }
}
</script>

<style>
.faq {
  max-width: 1036px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  padding: 15px;

  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #384D70;
  @media (max-width: 1070px) {
    max-width: 800px;
    margin-right: 100px;
    margin-left: 100px;
  }
  @media (max-width: 707px) {
    margin-right: 50px;
    margin-left: 50px;

  }
  @media (max-width: 360px) {
    margin-right: 20px;
    margin-left: 20px;
  }
}

.faq .question {
  position: relative;
  color: #fff;
  font-size: 20px;
  transition: all 0.3s linear;


  @media (max-width: 700px) {
    font-size: 1rem;
    padding-right: 5.5rem;
  }
  @media (max-width: 360px) {
    padding-right: 3rem;
  }
}

.faq .question::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%) rotate(0deg);
  width: 30px;
  height: 30px;
  background-image: url('./assets/icons/down-arrow-svgrepo-com.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  transition: all 0.2s linear;
}

.faq.open .question {
  margin-bottom: 15px;

}

.faq.open .question::after {
  transform: translateY(-50%) rotate(-90deg);
}

.faq .answer {
  color: #fff;
  font-size: 20px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;

  @media (max-width: 360px) {
    font-size: 1rem;
  }
}

.faq.open .answer {
  opacity: 1;
  max-height: 1000px;
}
</style>
