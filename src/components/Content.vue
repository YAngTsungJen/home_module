<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-md-8 py-4">
          <Thumbs></Thumbs>
        </div>
        <div class="col-md-4">
          <h3 class="py-4 text-center">國泰川青</h3>
          <div class="d-flex flex-column flex-fill px-5">
            <p >青溪地標壓軸爭席 國家卓越絕美臻藏</p>
            <p>榮獲2020年國家卓越建設獎</p>
            <p>李文勝x三井x國泰 菁英建築團隊</p>
            <p>壓軸倒數50、58坪 </p>
            <p>青溪特區最後VIP席次</p>
          </div>
        </div>
      </div>
    </div>
    <div class="main py-4">
      <div class="container">
        <p>桃園市 中壢區</p>
        <h2>
          國泰川青
        </h2>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">建案介紹</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">位址說明</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <h3 class="py-4 bold">青溪地標壓軸爭席 國家卓越絕美臻藏</h3>
                  <p>得天獨厚小環境，橫掃大青埔，公園、水岸、學區、商城、捷運、高鐵，你想要的全都有。全新落成，入主即可享受萬坪公園第一排，水岸第一景，豪宅大師黃永洪擘劃建築，飯店級公設，輕鬆坐擁新森活。</p>
                </div>
                <div class="col-md-6 py-4">
                  <table class="table text-dark table-bordered bg-transparent">
                    <thead>
                      <tr>
                        <th scope="col">建案類別</th>
                        <th scope="col">預售屋</th>
                        <th scope="col">貴賓專線</th>
                        <th scope="col">0948484223</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">格局規劃</th>
                        <td>2-3房、樓中樓</td>
                        <td>坪數規劃</td>
                        <td>23-42坪</td>
                      </tr>
                      <tr>
                        <th scope="row">樓層規劃</th>
                        <td>B4-15F</td>
                        <td>建築設計</td>
                        <td>黃永沃建築師事務所</td>
                      </tr>
                      <tr>
                        <th scope="row">基地位置</th>
                        <td colspan="4">桃園市中壢區永昌路</td>
                      </tr>
                      <tr>
                        <th scope="row">接待中心</th>
                        <td colspan="4">桃園市中壢區永昌路168號</td>
                      </tr>
                      <tr>
                        <th scope="row">基地位置</th>
                        <td colspan="4">
                          <a href="https://goo.gl/maps/wcaG93bZoFoYRASp6" target="_blank">
                            <img src="../assets/image/location.png" width="24" height="24" alt="">
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <h3 class="py-4">位址</h3>
                  <p>得天獨厚小環境，橫掃大青埔，公園、水岸、學區、商城、捷運、高鐵，你想要的全都有。全新落成，入主即可享受萬坪公園第一排，水岸第一景，豪宅大師黃永洪擘劃建築，飯店級公設，輕鬆坐擁新森活。</p>
                </div>
                <div class="col-md-6 py-4">
                  <img src="https://www.cathay-red.com.tw/Content/Upload/images/cases/20200522_map.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content container text-center py-5">
      <h2>建築賞心</h2>
      <h3>青埔核心 萬坪森態公園宅</h3>
      <p>戶戶享受水岸河景，無限棟距。萬坪樹海當鄰居，下樓就是公園，一趟環湖公園森林漫步，享受陽光普照下的甘甜。</p>
    </div>
    <div class="topic mt-5" style="background: center / cover no-repeat url(https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80);">
    </div>
    <div class="content container text-center py-5">
      <h2>周邊環境</h2>
      <h3>青埔核心 萬坪森態公園宅</h3>
      <p>戶戶享受水岸河景，無限棟距。萬坪樹海當鄰居，下樓就是公園，一趟環湖公園森林漫步，享受陽光普照下的甘甜。</p>
    </div>
    <Swiper></Swiper>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper.vue'
import Thumbs from '@/components/Thumbs.vue'
export default {
  components: {
    Swiper,
    Thumbs
  }
}
</script>
