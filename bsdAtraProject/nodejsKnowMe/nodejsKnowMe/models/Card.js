const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  isDelete: { type: Boolean },
  name: { type: String },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  agentDetails: {
    fullName: { type: String },
    rule: { type: String },
    mobile: { type: String },
    personalEmail: { type: String },
    aboutConnect: { type: String },
    aboutTitle: { type: String },
    personalMassegeTitle: { type: String },
    personalMassegeConnect: { type: String },
    fullNameFooter: { type: String },
    mobileFooter: { type: String },
    personalEmailFooter: { type: String },
    messageFooter: { type: String },
  },
  numFillsocialMedia: { type: Number },
  numSocialMedia: { type: Number },
  socialMedias: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SocialMedia",
    }
  ],

  vCardStyle:
  {

    fullNameShow: { type: Boolean },
    ruleShow: { type: Boolean },
    mobileShow: { type: Boolean },
    profileShow: { type: Boolean },
    mobileIconShow: { type: Boolean },
    aboutShow: { type: Boolean },
    personalMassegeShow: { type: Boolean },
    titleFooterShow: { type: Boolean },
    fullNameFooterShow: { type: Boolean },
    mobileFooterShow: { type: Boolean },
    personalEmailFooterShow: { type: Boolean },
    messageFooterShow: { type: Boolean },
    buttonFooterShow: { type: Boolean },
    footerSendEmailShow: { type: Boolean },
    cover: {
      height: { type: String },
      background: { type: String }
    },
    logo: {
      background: { type: String },
      backgroundSize: { type: String },
      position: { type: String },
      left: { type: String },
      top: { type: String },
      width: { type: String },
      height: { type: String },
      background: { type: String },
      border: { type: String },
      borderColor: { type: String },
      borderRadius: { type: String }
    },
    profile: {
      background: { type: String },
      backgroundSize: { type: String },
      position: { type: String },
      left: { type: String },
      top: { type: String },
      width: { type: String },
      height: { type: String },
      border: { type: String },
      borderColor: { type: String },
      borderRadius: { type: String },
      zIndex: { type: String }
    },
    bodyCardMobile:
    {

      body_card: {
        background: { type: String },
        height: { type: String },
        marginTop: { type: String },
        body_content_top: { type: String }
      },
      input_card_fullName: {
        color: { type: String },
        textAlign: { type: String },
        font: { type: String },
        letterSpacing: { type: String },
        textTransform: { type: String },
        fontSize: { type: String }
      },
      input_card_rule: {
        textAlign: { type: String },
        color: { type: String },
        font: { type: String },
        letterSpacing: { type: String }
      },
      socialMedia: {
        width: { type: String },
        height: { type: String },
        boxShadow: { type: String },
        border: { type: String },
        borderColor: { type: String },
        borderRadius: { type: String },
        borderWidth: { type: String },
        opacity: { type: String }
      },
      footerMobile: {
        titleFooter: { type: String },
        buttonFooter: { type: String }
      },
      input_footer_title: {
        background: { type: String },
        color: { type: String },
        textAlign: { type: String },
        font: { type: String },
        letterSpacing: { type: String },
        textTransform: { type: String },
        fontSize: { type: String }
      },

      input_footer_button: {
        background: { type: String },
        color: { type: String },
        textAlign: { type: String },
        font: { type: String },
        letterSpacing: { type: String },
        textTransform: { type: String },
        fontSize: { type: String }
      },
      button_footer: {
        width: { type: String },
        color: { type: String },
        background: { type: String }
      },
      background_footer: {
        background: { type: String },
        marginTop: { type: String }

      },
      input_footer_background: {
        background: { type: String },
        width: { type: String },
        height: { type: String }
      },
      message_footer_background: {
        background: { type: String },
        width: { type: String },
        height: { type: String }

      },
    },

    body_card_desktop: {
      body: {
        background: { type: String },
        minHeight: { type: String },
        display: { type: String },
        justifyContent: { type: String },
        marginTop: { type: String }
      },
      fullname: {
        color: { type: String },
        textAlign: { type: String },
        font: { type: String },
        letterSpacing: { type: String },
        textTransform: { type: String },
        fontSize: { type: String }
      },
      role: {
        color: { type: String },
        textAlign: { type: String },
        font: { type: String },
        letterSpacing: { type: String },
        textTransform: { type: String },
        fontSize: { type: String }
      },
      body_card_desktop_inline: {
        background: { type: String },
        minHeight: { type: String },
        width: { type: String },
        marginTop: { type: String },
        borderRadius: { type: String }
      },
      body_card_desktop_inline_conect: {
        marginTop: { type: String }
      },
      socialMedia: {
        width: { type: String },
        height: { type: String },
        boxShadow: { type: String },
        border: { type: String },
        borderColor: { type: String },
        borderRadius: { type: String },
        borderWidth: { type: String },
        opacity: { type: String }
      },

      footerDesktop: {
        titleFooter: { type: String },
        buttonFooter: { type: String }
      },

      input_footer_title: {
        background: { type: String },
        color: { type: String },
        textAlign: { type: String },
        font: { type: String },
        letterSpacing: { type: String },
        textTransform: { type: String },
        fontSize: { type: String }
      },
      input_footer_button: {
        background: { type: String },
        color: { type: String },
        textAlign: { type: String },
        font: { type: String },
        letterSpacing: { type: String },
        textTransform: { type: String },
        fontSize: { type: String }
      },
      button_footer: {
        width: { type: String },
        color: { type: String },
        background: { type: String }
      },
      background_footer: {
        background: { type: String }
      },
      input_footer_background: {
        background: { type: String },
        width: { type: String }

      },
      message_footer_background: {
        background: { type: String },
        width: { type: String }
      },
    },
    socialMediaSpace: {
      height: { type: String },
      overflowY: { type: String },
      overflowX: { type: String },
    },
  },
    viewers: [
      { date: { type: String }, amount: { type: Number } }
    ],
    submitioms: [
      { date: { type: String }, amount: { type: Number } }
    ],
    contactOptions: [{ date: { type: String }, sumContactOptions: { type: String } }]
 

});

module.exports = mongoose.model("Card", cardSchema);
